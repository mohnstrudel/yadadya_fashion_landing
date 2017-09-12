class Request < ApplicationRecord

  belongs_to :event

  validates :first_name, :last_name, :company, :position, :phone, :facebook, :available_ticket_id, presence: true
  # validates :email, uniqueness: true
  validates_email_format_of :email, :message => 'Электронный адрес в неверном формате'

  after_update :send_approval, :if => :approval_status_changed?
  
  def send_approval
    RequestMailer.delay(queue: "user", priority: 5).user_approval(self)
  end
end
