import React, { Fragment } from "react";
import Viewer, { Worker, defaultLayout } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import resume from "../ArunKumar_Resume.pdf";
import { PDFWrapper, Tool1, Tool2, Tool3 } from "../Styles/Resume";

const renderToolbar = (toolbarSlot) => {
	return (
		<Tool1>
			<Tool2>
				<Tool3>share</Tool3>
				<Tool3>{toolbarSlot.downloadButton}</Tool3>
				<Tool3>{toolbarSlot.zoomPopover}</Tool3>
			</Tool2>
		</Tool1>
	);
};

const layout = (isSidebarOpened = false, container, main, toolbar, sidebar) => {
	return defaultLayout(isSidebarOpened, container, main, toolbar(renderToolbar), sidebar);
};

const render = (props) => {
	return (
		<Fragment>
			<div style={{ height: "45px", background: "red" }}>
				<button onClick={() => props.download()}>Download</button>
			</div>
			<div>{props.viewer}</div>
		</Fragment>
	);
};

export default function Resume() {
	return (
		<Worker workerUrl='https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js'>
			<PDFWrapper>
				<Viewer
					fileUrl={resume}
					rendder={render}
					layout={layout} //TODO: FIX LATER
					defaultScale={window.innerWidth > 769 ? "1.70" : "0.60"}
				/>
			</PDFWrapper>
		</Worker>
	);
}
