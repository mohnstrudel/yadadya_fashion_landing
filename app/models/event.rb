class Event < ApplicationRecord
  has_many :lectures, dependent: :destroy

  accepts_nested_attributes_for :lectures, :allow_destroy => true

  has_many :event_organizers, dependent: :destroy
  has_many :organizers, through: :event_organizers

  has_many :tickets, dependent: :destroy
  has_many :users, through: :tickets

  has_many :speakers, through: :lectures

  validates :title, presence: true

  # Это фактичиские билеты. За использование tickets выше - СОРРИ!
  has_many :available_tickets, dependent: :destroy
  accepts_nested_attributes_for :available_tickets, :allow_destroy => true

  has_one :archive

  mount_uploader :mesto_logo, :povestka_1_logo, :povestka_2_logo, :povestka_3_logo, :povestka_4_logo, :povestka_5_logo, PictureUploader

end
