class Front::StaticPagesController < FrontController
  def home
    @password = User.generate_password
    @speakers = Speaker.all
    @lectures = Event.last.lectures
    @organizers = Event.last.organizers
  end
end
