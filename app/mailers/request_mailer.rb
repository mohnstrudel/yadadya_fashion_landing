class RequestMailer < ApplicationMailer
  default from: 'Fashion в digital <confirmation@yadadya.com>'
  layout 'mailer'
  helper 'front/mail'

  def notify_user(request)
    @request = request
    mail to: @request.email, subject: "Регистрация"
  end

  def notify_admin(request)
    @request = request
    mail to: "info@yadadya.com", subject: "Новая регистрация"
  end

  def user_approval(request)
    @event = Event.most_recent
    @request = request
    mail to: @request.email, subject: "Одобрение заявки"
  end

  def user_decline(request)
    @event = Event.most_recent
    @request = request
    mail to: @request.email, subject: "Заявка не одобрена"
  end
end
