class Archive < ApplicationRecord
  belongs_to :event

  has_many :pictures, dependent: :destroy

  accepts_nested_attributes_for :pictures, :allow_destroy => true
end
