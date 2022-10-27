export const GenderCard = (props:any) => {
    return (
      <>
        <div className="mt-2 rounded-2xl  shadow-md text-center hover:border hover:border-lime-300 w-[10rem] h-[5rem] flex justify-center items-center">
          <p className="font-medium">{props.text}</p>
        </div>
      </>
    );
};