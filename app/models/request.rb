class Request < ApplicationRecord

  belongs_to :event

  validates :first_name, :last_name, :company, :position, :phone, :facebook, :available_ticket_id, presence: true
  # validates :email, uniqueness: true
  validates_email_format_of :email, :message => 'Электронный адрес в неверном формате'
end
