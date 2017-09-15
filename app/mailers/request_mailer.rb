class RequestMailer < ApplicationMailer
  default from: 'Подтверждение участия <confirmation@yadadya.com>'
  layout 'mailer'

  def notify_user(request)
    @request = request
    mail to: @request.email, subject: "Регистрация участия в мероприятии"
  end

  def notify_admin(request)
    @request = request
    mail to: "info@yadadya.com", subject: "Новая регистрация"
  end

  def user_approval(request)
    @event = Event.most_recent
    @request = request
    mail to: @request.email, subject: "Подтверждение участия в мероприятии"
  end

  def user_decline(request)
    @event = Event.most_recent
    @request = request
    mail to: @request.email, subject: "Отказ в участии в мероприятии"
  end
end
