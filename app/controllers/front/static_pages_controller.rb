class Front::StaticPagesController < FrontController
  def home
    @password = User.generate_password
  end
end
