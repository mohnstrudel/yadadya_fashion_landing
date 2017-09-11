class RequestMailer < ApplicationMailer
  default from: 'Подтверждение участия <confirmation@yadadya.com>'
  layout 'mailer'

  def notify_user(request)
    @request = request
    mail to: @request.email, subject: "Подтверждение участия в мероприятии"
  end

  def notify_admin(request)
    @request = request
    mail to: "info@yadadya.com", subject: "Новая регистрация"
  end
end
