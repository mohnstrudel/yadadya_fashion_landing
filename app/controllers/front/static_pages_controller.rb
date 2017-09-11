class Front::StaticPagesController < FrontController
  def home
    @event = Event.last
    @password = User.generate_password
    @speakers = Speaker.all
    @lectures = Event.last.lectures
    @organizers = Event.last.organizers
    @tickets = Event.last.available_tickets
  end
end
