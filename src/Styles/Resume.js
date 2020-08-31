import styled from "styled-components";

export const PDFWrapper = styled.div`
	width: 99%;
	margin: 0 auto;
	height: 100%;
	// height: calc(100vh - 40px);
	overflow: hidden;
`;

//* RENDERTOOLBAR HIERARCHICAL
export const Tool1 = styled.div`
	align-items: center;
	width: 100%;
	overflow: hidden;
`;

export const Tool2 = styled.div`
	align-items: center;
	display: flex;
	flex-grow: 1;
	flex-shrink: 1;
	justify-content: flex-end;
`;

export const Tool3 = styled.div`
	padding: 0 2px;
`;
