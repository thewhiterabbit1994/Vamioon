import { Link } from "react-router-dom";
export default ({ to = to = "#", setmodalLogOut }) => {
    return (
        <div className="flex fixed w-[13vw] right-[2.19vw] bottom-[1.10vw] justify-between m-auto ">
            <button
                onClick={() => setmodalLogOut(false)}
                className="w-[5.8vw] h-[2.6vw] bg-[#C4C4C4] rounded-[2.1vw] text-[#4D4D4D] text-[0.87vw]">لغو</button>
            <Link to={to}>
                <button className="w-[5.8vw] h-[2.6vw] bg-[#00693B] rounded-[2.1vw] text-[#fff] text-[0.87vw]">بله</button>
            </Link>
        </div>
    )
}