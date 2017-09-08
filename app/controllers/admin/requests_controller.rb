class Admin::RequestsController < AdminController

  include CrudConcern

  before_action :find_request, only: [:edit, :update, :destroy]
  

  def index
    # @requests = Request.all

    if params[:only_current]
      @requests = index_helper("Request").where(event_id: Event.last.id).order(created_at: :desc)
    else
      @requests = index_helper("Request").order(created_at: :desc)
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

