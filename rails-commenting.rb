# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) This is the controller with a name of BlogPosts. The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.
class BlogPostsController < ApplicationController
  def index
    # 2) This method will show all of the BlogPosts. 
    @posts = BlogPost.all
  end

  def show
    # 3) This method will show only the BlogPost with the corresponding param of :id.
    @post = BlogPost.find(params[:id])
  end

  # 4) This method will lead to the viewing of a newly created blog post. 
  def new
  end

  def create
    # 5) This method will lead to the creation of a new blogpost and save to database. It will check to see if the post has already been made before if it has then it will send you to that post if not it will lead you to a new page to create a post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6)This is the re-direct for after a blog post has been deleted. It is utilizing a helper method at the end of the route to assist in linking the pages (_path)
      redirect_to blog_post_path(@post)
    end
  end

  # 7) It is good practice to use "private", so that this method is not called from any external objects. 
  private
  def blog_post_params
    # 8) These are strong params. It will require the following information to be input in order to be appropriately stored in the database. 
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)This is used to explain relationship between each of the model classe. 
class BlogPost < ApplicationRecord
  # 10) In this case a blog post has many comments. Comments contains the foreign id. 
  has_many :comments
end
