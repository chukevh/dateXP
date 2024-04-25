import { FallingLines } from "react-loader-spinner";

export default function Loading() {
    return (
        <div className="loading-container">
            <FallingLines
                color="#b7aaf2"
                width="100"
                visible={true}
            />
        </div>
    )
}