
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
{/* Find more icons */ }
import { AiFillHome } from "react-icons/ai";
import { BsBarChartFill, BsBellFill } from "react-icons/bs";
import { RiPresentationFill, RiVolumeUpFill } from "react-icons/ri";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "350px" }}>
            <h2>Course Status</h2>

            {/* Publish / Unpublish Buttons */}
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <Button variant="secondary" size="lg" className="w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
                    </Button>
                </div>
                <div className="w-50">
                    <Button variant="success" size="lg" className="w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish
                    </Button>
                </div>
            </div>

            <br />

            {/* Additional Course Actions */}
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <AiFillHome className="me-2 fs-5" /> Choose Home Page
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <RiPresentationFill className="me-2 fs-5" /> View Course Screen
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <RiVolumeUpFill className="me-2 fs-5" /> New Announcement
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BsBarChartFill className="me-2 fs-5" /> New Analytics
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BsBellFill className="me-2 fs-5" /> View Course Notifications
            </Button>
        </div>
    );
}


// export default function CourseStatus() {
//     return (
//         <div id="wd-course-status">
//             <h2>Course Status</h2>
//             <button>Unpublish</button>
//             <button>Publish</button>
//             <br /><br />

//             {/* ！！！ Complete on your own */}
//             <div className="button-container">
//                 <tr>
//                     <button>Import Existing Content</button>
//                 </tr>
//                 <tr>
//                     <button>Import from Commons</button>
//                 </tr>
//                 <tr>
//                     <button>Choose Home Page</button>
//                 </tr>
//                 <tr>
//                     <button>View Course Stream</button>
//                 </tr>
//                 <tr>
//                     <button>New Announcement</button>
//                 </tr>
//                 <tr>
//                     <button>New Analytics</button>
//                 </tr>
//                 <tr>
//                     <button>View Course Notifications</button>
//                 </tr>
//             </div>
//         </div>
//     );
// }
