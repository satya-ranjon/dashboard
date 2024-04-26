import Topbar from "@/components/dashboard/Topbar";
import SearchOptions from "@/components/dashboard/SearchOptions";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaPlus } from "react-icons/fa6";
import { FaFilter, FaSearchPlus, FaHome, FaWhatsapp } from "react-icons/fa";
import { IoShareSocial, IoSettingsOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiPrinter } from "react-icons/fi";
import { MdElectricBolt } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area";
import FilterOptions from "@/components/dashboard/FilterOptions";

export default function Home() {
  return (
    <main className=" m-4">
      <Topbar />
      <ScrollArea className="h-[765px] w-full pr-4 ">
        <SearchOptions />
        <FilterOptions />
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          accusantium similique aspernatur dolor obcaecati voluptas tempore et
          itaque, quos, possimus quidem consequatur quaerat? Adipisci, harum?
          Eaque ratione dolorem nihil voluptas facere illum vitae. Dolorum
          voluptate enim non tempore? Dignissimos aspernatur voluptatem,
          perferendis asperiores cumque est, explicabo hic repellat ut itaque,
          quos, possimus quidem consequatur quaerat? Adipisci, harum? Eaque
          ratione dolorem nihil voluptas facere illum vitae. Dolorum voluptate
          enim non tempore? Dignissimos aspernatur voluptatem, perferendis
          asperiores cumque est, explicabo hic repellat ut itaque, quos,
          possimus quidem consequatur quaerat? Adipisci, harum? Eaque ratione
          dolorem nihil voluptas facere illum vitae. Dolorum voluptate enim non
          tempore? Dignissimos aspernatur voluptatem, perferendis asperiores
          cumque est, explicabo hic repellat ut itaque, quos, possimus quidem
          consequatur quaerat? Adipisci, harum? Eaque ratione dolorem nihil
          voluptas facere illum vitae. Dolorum voluptate enim non tempore?
          Dignissimos aspernatur voluptatem, perferendis asperiores cumque est,
          explicabo hic repellat ut voluptatibus recusandae placeat eos, vero
          quas dolor sequi doloribus in nam distinctio facere earum laudantium.
          Aut fugiat eum repellendus sint inventore accusantium eveniet dolor
          aspernatur! Vero labore nesciunt quod saepe sunt nulla sequi earum
          optio voluptas natus necessitatibus adipisci excepturi totam iusto
          veniam, animi, id, quas architecto! Ipsum, suscipit. Reiciendis
          explicabo, consectetur pariatur repudiandae debitis dolor omnis dicta
          illum! Voluptate itaque reiciendis quia labore dolorem error optio
          laudantium voluptatum atque laboriosam sed voluptatem, fugit quos
          fugiat dolores? Doloremque ducimus repudiandae harum, autem labore,
          non eveniet reiciendis in ut magnam, nobis fuga sequi. Quos labore a
          fugit sed aperiam iusto at sequi magni rerum qui, laboriosam minima
          quasi quod, modi quo. Illo ipsam cupiditate dolorum provident
          quibusdam in! Fugiat, optio id ea veniam dolorem molestiae praesentium
          atque voluptatum dignissimos accusantium nesciunt voluptas odio
          laudantium incidunt quaerat reprehenderit fuga recusandae eaque.
          Officiis harum error ipsum deserunt! Fugit commodi similique expedita,
          dolorum magnam quas, deleniti eveniet velit, sequi dolore tempore
          ipsum numquam! Expedita aut harum, vero ullam quidem fugiat hic libero
          eos fugit veritatis ratione quod nesciunt rem asperiores itaque
          voluptate ipsum soluta magni necessitatibus dignissimos magnam illo
          voluptatem. Voluptas molestiae eveniet dignissimos eligendi dicta
          impedit placeat libero vel iusto aliquid maxime laborum accusantium
          sed laudantium et aliquam, nihil minus tempore sunt natus. Molestias
          ea corrupti suscipit quo iure maxime vitae, eligendi explicabo
          pariatur eius quis vel dolorem officiis in. Hic nobis eligendi earum
          nihil maxime praesentium, blanditiis laudantium amet natus iure
          deserunt delectus, fuga saepe dolores distinctio quibusdam
          exercitationem vero dicta voluptatem? Assumenda perspiciatis odio
          dicta porro aut officia, aliquam earum distinctio quo facilis
          perferendis? Impedit unde omnis a vitae, maiores consequatur
          architecto provident perferendis in, officia iusto? Impedit
          perspiciatis molestias sit itaque qui ullam cupiditate, voluptatibus
          amet ex dolorum? Tenetur ab doloribus necessitatibus voluptas odit
          veritatis perferendis et optio nulla obcaecati eaque, magnam nostrum
          explicabo nisi libero qui illo porro? Eaque voluptas earum labore ab
          quia, odio, possimus unde sunt temporibus libero modi fuga totam
          inventore dolore iste quis vel dolorem animi explicabo. Placeat
          tempora nam assumenda? Tempore hic, minus consequatur aperiam
          aspernatur blanditiis nemo molestiae nobis vel eligendi laborum autem
          delectus tempora quisquam dolorum cum nostrum accusamus maiores sequi
          neque corporis quia? Quo doloribus deleniti nemo nesciunt voluptas
          eos, tenetur adipisci debitis. Eligendi sapiente ipsa, quia ad eum
          corrupti libero quam nobis, nemo molestias harum iste delectus a
          dolores adipisci numquam tempora nam voluptas cupiditate id vitae
          ipsum sed excepturi? Odio, ullam! Totam ducimus optio magni, illum
          ullam aliquam? Voluptatibus itaque exercitationem vel at placeat optio
          tenetur nobis quibusdam atque animi odio cupiditate ex maiores eius
          sequi magnam facilis rem earum pariatur adipisci explicabo voluptatum
          eveniet, fuga excepturi. Tenetur, quos illum nulla et cum eum deleniti
          harum commodi nobis earum suscipit.
        </div>
      </ScrollArea>
    </main>
  );
}
