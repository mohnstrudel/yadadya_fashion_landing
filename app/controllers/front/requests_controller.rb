class Front::RequestsController < FrontController
  def create
    @request = Request.new(request_params)

    respond_to do |format|
      if @request.save
        format.js
      else
        format.js { render partial: 'fail' }
        
      end
    end
  end

  private

  def request_params
    params.require(:request).permit(Request.attribute_names.map(&:to_sym))
  end
end
