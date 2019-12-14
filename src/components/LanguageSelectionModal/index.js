import '../../styles/animations.css';

import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Container } from './styles';

export default function LanguageSelectionModal() {
  const { t, i18n } = useTranslation();
  const MySwal = withReactContent(Swal);

  return (
    <></>
    // {
    //   MySwal.fire({
    //     title: <p>Hello World</p>,
    //     footer: "Copyright 2018",
    //     onOpen: () => {
    //       // `MySwal` is a subclass of `Swal`
    //       //   with all the same instance & static methods
    //       MySwal.clickConfirm(() => {});
    //     },
    //     preConfirm: () => {
    //       return undefined;
    //     }
    //   }).then(() => {
    //     return MySwal.fire(
    //       <div className="modalBox">
    //         <h1>Choose languege</h1>
    //         <ul id="languages">
    //           <li className={i18n.language === "en" && "selected"}>
    //             {t("English")}
    //           </li>
    //           <li className={i18n.language === "pt-br" && "selected"}>
    //             {t("Portuguese")}
    //           </li>
    //           <li className={i18n.language === "es" && "selected"}>
    //             {t("Spanish")}
    //           </li>
    //         </ul>
    //       </div>
    //     );
    //   });
    // }
  );

  // const changeTranslation = ln => {
  //   //open language modal
  //   console.tron(ln);
  //   i18n.changeLanguage(ln);
  // };

  // return <Container />;
}
