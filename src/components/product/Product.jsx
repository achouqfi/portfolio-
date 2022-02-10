import React from 'react';

const Product = () => {
  return (
    <div>    
      <section class="bg-black py-20">
          <div class="max-w-5xl px-6 mx-auto text-center">
              <h1 class="text-3xl font-semibold text-yellow-400">Technologies and skills</h1>
          </div>
          <div id="wrapper" class="px-4 py-4 mx-auto mt-4">
            <div class="md:grid sm:grid-flow-row sm:gap-5 sm:grid-cols-9 ml-4">
                <div id="jh-stats-positive" class=" px-4 py-4 bg-white border-4 border-yellow-400 rounded">
                    <div>
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/197px-Unofficial_JavaScript_logo_2.svg.png"  alt="" /> */}
                        <p class="text-lg text-center text-gray-500">JavaScripy</p>
                    </div>
                </div>
    
                <div id="jh-stats-negative" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"   alt="" /> */}
                        <p class="text-lg text-center text-gray-500">ReactJS</p>
                    </div>
                </div>
                <div id="jh-stats-negative" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://miro.medium.com/max/300/1*-dTgqd1_xzn-DOyjVnj0gA.png" alt="" /> */}
                        <p class="text-lg text-center text-gray-500">Vue.js</p>
                    </div>
                </div>
                <div id="jh-stats-negative" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thu…d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" /> */}
                        <p class="text-lg text-center text-gray-500">Node Js</p>
                    </div>
                </div>

                <div id="jh-stats-neutral" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://miro.medium.com/max/300/1*-dTgqd1_xzn-DOyjVnj0gA.png" alt="" /> */}
                        <p class="text-lg text-center text-gray-500">Laravel</p>
                    </div>
                </div>

                <div id="jh-stats-neutral" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png" alt="" /> */}
                        <p class="text-lg text-center text-gray-500">Wordpress</p>
                    </div>
                </div>

                <div id="jh-stats-neutral" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"   alt="" /> */}
                        <p class="text-lg text-center text-gray-500">UI-UX</p>
                    </div>
                </div>

                <div id="jh-stats-neutral" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…LKF1ZVMChj-plkWudQwXjeL1JxvgRdDZrSjzP-oMusqp=CAU"  alt="" /> */}
                        <p class="text-lg text-center text-gray-500">Next.js</p>
                    </div>
                </div>

                <div id="jh-stats-neutral" class=" px-4 py-4 mt-4 bg-white border-4 border-yellow-400 rounded sm:mt-0">
                    <div>
                    {/* <img src="https://assets.website-files.com/60b9fdcaf8c317a1cfdb2bd9/60d5df5a051d8765f7027878_expressjs.png"   alt="" /> */}
                        <p class="text-lg text-center text-gray-500">Express.js</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
