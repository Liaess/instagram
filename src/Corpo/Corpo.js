import SecaoStory from "./SecaoStory";
import SecaoPosts from "./SecaoPosts"
import Sidebar from "./Sidebar";

export default function Corpo(){
    return(
      <div class="corpo">
        <div class="esquerda">
          <SecaoStory />
          <SecaoPosts />  
        </div>
          <Sidebar />
      </div>
    )
}