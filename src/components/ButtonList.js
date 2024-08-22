import Button from "./Button"

const ButtonList = () => {
  const Lists = ["All","Live" ,"Gaming", "Music" ,"Cricket","Cooking","News","Skills","New to you"]
  return (
    <div className="flex">
      {Lists?.map((list,index) => <Button key = {index} name = {list} /> )}
    </div>
  )
}

export default ButtonList