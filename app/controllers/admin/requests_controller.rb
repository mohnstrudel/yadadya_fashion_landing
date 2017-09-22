class Admin::RequestsController < AdminController

  include CrudConcern

  before_action :find_request, only: [:edit, :update, :destroy, :approve, :decline]
  

  def index
    # @requests = Request.all

    if params[:only_current]
      @requests = Request.where(event_id: Event.last.id).order(created_at: :desc).paginate(:page => params[:page], :per_page => Request.count)
    else
      @requests = index_helper("Request").order(created_at: :desc)
    end
  end

  def approve
    if @request.approve
      flash[:success] = "Пользователь #{@request.first_name} (#{@request.email}) подтвержден как участник встречи. Ему отправленно уведомление."
      redirect_to admin_requests_path
    else
      flash[:danger] = "Возникли ошибки: #{@request.errors.inspect}"
      render :index
    end
  end

  def decline
    if @request.decline
      flash[:success] = "Пользователю #{@request.first_name} (#{@request.email}) отказано в участии. Ему отправленно уведомление."
      redirect_to admin_requests_path
    else
      flash[:danger] = "Возникли ошибки: #{@request.errors.inspect}"
      render :index
    end
  end

  def new
    @request = Request.new
  end

  def create
    @request = Request.new(request_params)
    create_helper(@request, "edit_admin_request_path")
  end

  def update
    update_helper(@request, "edit_admin_request_path", request_params)
  end

  def edit
  end

  def destroy
    destroy_helper(@request, "admin_requests_path")
  end

  private

  def find_request
    @request = Request.find(params[:id])
  end

  def request_params
    params.require(:request).permit(Request.attribute_names.map(&:to_sym))
  end

end

