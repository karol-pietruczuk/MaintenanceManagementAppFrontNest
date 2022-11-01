import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useAppSelector } from "../../../redux-toolkit/redux-hooks";
import { selectLoading } from "../../../redux-toolkit/features/loading/loadingSlice";
import './CommonLoadingBox.css';

export const CommonLoadingBox = () => {
  const {loading, visible} = useAppSelector(selectLoading);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setOpacity(loading);
  },[loading]);

  return visible ? <div className={'common-loading-box'} style={opacity ? {opacity: 1} : {opacity: 0}}>
    <Spinner label={"logging in ..."} speed='0.6s'/>
    <p>logging in...</p>
  </div> : null;
};