import userIcon from "../Assets/userIcon.png";

const commentsData = [
  {
    name: "Ram",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Suresh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "sharma",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Gopal",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Priya",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "swetha",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "harini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Latha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Senthil",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rajesh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex m-3 bg-gray-100 p-2 border border-x-black">
      <img className="w-12 h-12 mr-2" src={userIcon} alt="user-Icon" />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return commentsData?.map((comment, index) => (
    <div  key={index} >
      <Comments data={comment} />
      <div className="pl-5">
        {comment?.replies && <CommentList commentsData={comment?.replies} />}
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="mt-2 px-5 w-[78%]">
      <h1 className="font-bold text-xl">Comments</h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentContainer;
