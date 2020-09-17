import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
	position: absolute;
	right: 30px;
	bottom: 30px;
	height: 40px;
	background: transparent;
	cursor: pointer;
	z-index: 1000;
	display: ${(props) => (props.show ? "flex" : "none")};
	animation: ${fadeIn} 0.3s;
	border-radius: 0 30px 30px 0;
	-webkit-tap-highlight-color: transparent;
	&:hover {
		opacity: 1;
		background: white;
		div {
			&:after,
			&:before {
				top: 42%;
				transition: top 0.2s;
			}
		}
		span {
			transition: all 0.3s;
			opacity: 1;
			transform: translateX(0px);
		}
	}
	div {
		box-shadow: 0px 0px 10px 0px #777777;
		width: 40px;
		height: 40px;
		background-color: white;
		border-radius: 50%;
		position: relative;
		&:after,
		&:before {
			width: 40%;
			height: 3px;
			content: "";
			background-color: black;
			position: absolute;
			top: 45%;
			transition: top 0.2s;
		}
		&:after {
			transform: rotate(45deg);
			right: 18%;
		}
		&:before {
			left: 18%;
			transform: rotate(135deg);
		}
	}
	span {
		padding: 0 5px;
		font-size: 0.7rem;
		font-weight: 700;
		line-height: 40px;
		transition: all 0.3s;
		transform: translateX(50px);
		opacity: 0;
	}
`;

export default function ScrollToTop({ mainRef }) {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = useCallback(() => {
		if (!showScroll && mainRef.current.scrollTop > 100) {
			setShowScroll(true);
		} else if (showScroll && mainRef.current.scrollTop <= 100) {
			setShowScroll(false);
		}
	}, [showScroll, setShowScroll, mainRef]);

	const scrollTop = () => {
		mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		mainRef.current.addEventListener("scroll", () => {
			checkScrollTop();
		});
		return () => {};
	}, [checkScrollTop, mainRef]);

	return (
		<Wrapper onClick={scrollTop} show={showScroll}>
			<span>SCROLL TO TOP</span>
			<div></div>
		</Wrapper>
	);
}
