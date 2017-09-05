class Event < ApplicationRecord
  has_many :lectures, dependent: :destroy

  accepts_nested_attributes_for :lectures, :allow_destroy => true
end
