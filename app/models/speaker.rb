class Speaker < ApplicationRecord
  mount_uploader :picture, PictureUploader

  validates :picture, :first_name, presence: true
end
