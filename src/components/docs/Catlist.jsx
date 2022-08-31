import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

import swal from "sweetalert";

import { Table } from "antd";
import "../antdstyle.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import { useForm } from "react-hook-form";
import ViewDocuments from "./ViewDocuments";
import Create_Vendor from "./Create_Document";
import Create_Document from "./Create_Document";

const Catlist = () => {
    useEffect(() => {
    }, [])


    return (

        <>
        <Create_Document />
        </>
    )
}
export default Catlist;