class AvailableTicket < ApplicationRecord
  belongs_to :ticket_type
  belongs_to :event

  after_create :set_remaining_amount

  private

  def set_remaining_amount
    self.remaining_amount = self.amount
    self.save!
  end
end
