class Request < ApplicationRecord

  validates :first_name, :last_name, :company, :position, :email, :phone, :facebook, presence: true

end
