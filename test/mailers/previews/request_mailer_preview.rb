# Preview all emails at http://localhost:3000/rails/mailers/request_mailer
class RequestMailerPreview < ActionMailer::Preview
  def user_approval
    RequestMailer.user_approval(Request.last)
  end
end
