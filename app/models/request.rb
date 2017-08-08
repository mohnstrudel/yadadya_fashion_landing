class Request < ApplicationRecord

  validates :first_name, :last_name, :company, :position, :email, :phone, presence: true

end
