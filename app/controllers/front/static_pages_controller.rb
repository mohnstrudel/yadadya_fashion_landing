class Front::StaticPagesController < FrontController
  def home
    @event = Event.last
    @password = User.generate_password
    
    @speakers = @event.speakers
    @lectures = @event.lectures
    @organizers = @event.organizers
    @tickets = @event.available_tickets

    @start_time = @event.lectures.first.timeframe.split(" - ")[0]
    @end_time = @event.lectures.last.timeframe.split(" - ")[1]
    if Event.offset(1).exists?
      @archive = Event.offset(1).last.archive
    else
      @archive = nil
    end
  end
end
