import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";

// icons
import { IoMdPerson } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

const SingleBlog = () => {
  const data = useLoaderData();

  const { title, image, author, published_date, reading_time, content } =
    data[0];

  return (
    <div>
      <div className="bg-black w-screen py-24  text-white text-center px-5">
        <h1 className="text-6xl  font-bold mb-5 uppercase">
          Single Blog <span className=" text-orange-500">page</span>
        </h1>
      </div>

      {/* blog details */}

      <div className=" max-w-7xl mx-auto px-5 my-16 ">
        <div className=" grid grid-cols-3 max-lg:gap-12">
          <div className="lg:w-3/4 mx-auto max-md:col-span-full col-span-2">
            <div>
              <img src={image} alt="" className="w-full rounded-sm" />
            </div>
            <h3 className="text-2xl max-md:text-xl font-medium text-blue-500 my-5">
              {title}
            </h3>
            <span className="text-sm mb-2 gap-2 text-gray-600 flex items-center">
              <IoMdPerson className="text-black text-lg" />
              {author} | {published_date}
            </span>
            <span className="text-sm mb-5 gap-2 text-gray-600 flex items-center">
              <FaRegClock className="text-black text-lg" />
              {reading_time}
            </span>
            <p className="text-gray-600 leading-8">
              {content} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Non eos quos quas dicta voluptas repellat quibusdam reiciendis
              deserunt voluptatibus impedit nihil, debitis vel mollitia numquam
              in asperiores iusto laudantium sit! Minima saepe repellendus nihil
              rem ullam at cumque quo velit quis deleniti molestias mollitia
              explicabo aut quos, inventore neque ducimus tenetur illum
              temporibus magnam officiis ad iure aspernatur similique? Id, quae
              odit eaque nostrum modi ipsa eius pariatur neque asperiores! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Id assumenda
              dolor iusto culpa vitae reprehenderit minima, ut aliquam natus
              nostrum numquam dolore delectus consequatur necessitatibus
              asperiores, tempore ex! Repellendus sed delectus officia sit ab at
              adipisci facere, corrupti pariatur mollitia fugiat cum facilis
              debitis. Numquam, repellat animi a voluptatem est maxime
              perspiciatis nisi magnam. Officia doloribus culpa impedit aut!
              Debitis aspernatur quod exercitationem id reprehenderit incidunt
              dolore ut, voluptatem aliquid eligendi minus corrupti quia,
              provident cupiditate rerum veniam eum. Sequi impedit, consequatur
              cupiditate commodi praesentium accusamus deserunt nesciunt rerum
              sint consectetur maxime aut, quo expedita non a laborum et,
              architecto obcaecati tempora atque. Temporibus totam impedit
              voluptatem quo, esse tempore odio iste, est labore repudiandae
              illum odit consequatur natus cupiditate veniam atque quia, soluta
              explicabo tempora distinctio ducimus veritatis facere quos nam.
              Fugit, explicabo ratione dignissimos eius reprehenderit aperiam
              consequatur impedit, blanditiis ea, accusantium modi alias.
              Blanditiis eum magni at cumque debitis aliquam rem totam beatae
              inventore harum ullam maxime, alias velit, facilis possimus
              dignissimos quis, vero esse. Dolor, reprehenderit veniam
              laboriosam fugiat facilis molestiae sit laudantium quaerat
              mollitia deserunt, quisquam exercitationem. Nulla at, laboriosam
              quo eum id voluptas ea? Fugit similique nam, distinctio, ullam
              reiciendis facilis in laudantium esse soluta officia porro at
              error! Pariatur aut earum, sit odit asperiores similique accusamus
              quos harum amet, unde nemo veniam, expedita quae rem tenetur enim
              magnam. Voluptas enim magni, magnam mollitia expedita ducimus,
              dolorem quis nihil, totam dolorum quae quisquam voluptatem! Quo
              totam voluptatum necessitatibus vitae, veniam sequi, soluta
              tempora consequatur veritatis tempore accusantium dicta tenetur
              enim illum corporis temporibus est quas. Alias eligendi eos
              perferendis temporibus placeat rerum delectus, ducimus voluptatem,
              consectetur doloribus consequatur numquam quo tenetur at ut sit
              ipsum deleniti laudantium iusto deserunt reprehenderit. Laboriosam
              quo dicta obcaecati odio id atque, ad reprehenderit rem minima
              dolore repudiandae! Molestias.
            </p>
          </div>

          <div className="w-1/ md:block hidden">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
