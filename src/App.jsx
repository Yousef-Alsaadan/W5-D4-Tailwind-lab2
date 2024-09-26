import "./App.css";

function App() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png/size/w=1420?exp=1727433093&sig=55VsFI-gS4jjOy3R7xL8-crKIgcAEOnUVzqWnKeLSbQ)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-gray-50">
          <div className="max-w-screen">
            <p className="font-thin fon text-4xl mb-4">
              Fresh<span className="font-medium">Goods</span>
            </p>
            <h1 className="text-8xl font-thin">Concisely</h1>
            <h1 className="text-8xl font-thin">describe your</h1>
            <h1 className="mb-5 text-8xl font-thin">product or service</h1>
            <p className="mb-5 w-4/5">
              No need to get clever. Tell people exactly what you`re offering,
              then use this space to communicate your key value proposition.
            </p>
            <button className="btn bg-[#FDB406] border-none font-semibold ">
              ORDER NOW
            </button>
          </div>
          <div className="hidden lg:invisible">
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
                <p>Fresh Goods</p>
                <h1 className="mb-5 text-5xl font-bold">
                  Concisely describe your product or service
                </h1>
                <p className="mb-5">
                  No need to get clever. Tell people exactly what you`re
                  offering, then use this space to communicate your key value
                  proposition.
                </p>
                <button className="btn btn-primary">ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col gap-8 m-16 items-center">
        <h1 className="text-6xl w-2/3">
          Here are some of the benefits of your offer
        </h1>
        <p className="w-1/2">
          Explain what makes your product or service great. Talk about features
          in a way that highlights the real value people get out of them.
        </p>

        <div className="flex justify-between items-center flex-col gap-4 lg:mt-16 lg:flex-row">
          <div className="flex flex-col gap-4 items-center justify-center lg:w-1/4">
            <img
              className="w-20"
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
            />
            <h1>Benefit 1</h1>
            <p>
              For example, restaurants and bakeries could outline the health
              benefits of their all natural ingredients.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center lg:w-1/4">
            <img
              className="w-20"
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
            />
            <h1>Benefit 2</h1>
            <p>
              Florists and other small retailers might use this space to
              describe. how their products make delightful, one-of-a-kind gifts.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center lg:w-1/4">
            <img
              className="w-20"
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
            />
            <h1>Benefit 3</h1>
            <p>
              You could also add buttons to this section and share links to
              other products or available delivery methods.
            </p>
          </div>
        </div>
      </div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png/size/w=1420?exp=1727433093&sig=UdjB98PW4zJ-ibKSmDCjG4TsT4I6uhTT4j-Z43dvACs)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-gray-50 text-center ml-80 mr-80">
          <div className="max-w-screen">
            <p className="font-thin text-3xl mb-4">What our customers say</p>
            <h1 className="mb-5 text-8xl font-black text-[#F9B00C]">،،</h1>
            <p className="mb-5 text-5xl font-thin">
              Share a real testimonial that hits some of your benefits but isn`t
              too sales-y.
            </p>
            <div className="flex flex-col items-center">
              <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png" />
              <p className="mt-2">REAL NAME</p>
              <p>Location</p>
              <div className="flex gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F9B00C"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F9B00C"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F9B00C"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F9B00C"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#F9B00C"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] p-32 flex justify-center gap-4">
        <div className="flex flex-col gap-4 text-center items-center">
          <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg" />
          <h3>Feature 1</h3>
          <p className="w-3/4">
            Talk about some of the details of your offer with a focus on the
            value people get back.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-center items-center">
          <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg" />
          <h3>Feature 2</h3>
          <p className="w-3/4">
            Is there a pain point that your product or service resolves? Tell
            visitors about it here.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-center items-center">
          <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" />
          <h3>Feature 3</h3>
          <p className="w-3/4">
            Alternatively, you could use this section to address some frequently
            asked questions.
          </p>
        </div>
      </div>

      <div className="p-32 flex gap-2 items-center">
        <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" />
        <div className="flex flex-col w-2/5 gap-20">
          <h1 className="text-5xl">
            Some more information about your business
          </h1>
          <p>
            Share a little about yourself as a business owner, or maybe describe
            what makes your product or service unique. Give visitors one more
            reason to care about your offer and want to buy from you.
          </p>
        </div>
      </div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F1bf45807-806c-4ab9-a756-d7ff6c3f56f6%2FScreen_Shot_2023-11-26_at_11.03.28_AM_cleanup.png/size/w=1420?exp=1727433094&sig=pH2q9NiEWCsz4tFsz-v_2shL86mhzrtWOQpGtXkwDgw)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-gray-50 text-center ml-80 mr-80">
          <div className="max-w-screen flex flex-col items-center gap-12">
            <h1 className="mb-5 text-7xl font-black text-[#000] w-4/5">
              End with one final call to action
            </h1>
            <p className="mb-5 font-thin text-[#000] w-4/5">
              This is your last shot at converting someone. Remind them about
              the benefits of your offer and encourage them to act now.
            </p>
            <button className="btn bg-[#FDB406] border-none font-semibold ">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between bg-[#303030] text-[#fff] pl-24 pr-24 pt-6 pb-6">
        <p className="font-thin text-4xl mb-4">
          Fresh<span className="font-medium">Goods</span>
        </p>

        <p>©2020 Insert Name Here. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
