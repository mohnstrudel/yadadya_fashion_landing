class Event < ApplicationRecord
  has_many :lectures, dependent: :destroy

  accepts_nested_attributes_for :lectures, :allow_destroy => true

  has_many :event_organizers, dependent: :destroy
  has_many :organizers, through: :event_organizers

  validates :title, presence: true
end
