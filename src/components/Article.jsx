import React from "react";
import Author from "./Author";
import Content from "./Content";
import Published from "./Published";

export default function Article(){
    return(
        <div>
            <Author name="Alice" img="https://baikaltravelclub.ru/upload/iblock/8b4/8b4e5d81e01fceec99c3dbfdaa89f1f3.png"/>
            <Content title="Information from her:" />
            <Published  text="Предварительные выводы неутешительны: высококачественный прототип будущего проекта позволяет оценить значение существующих финансовых и административных условий! В своём стремлении улучшить пользовательский опыт мы упускаем, что предприниматели в сети интернет заблокированы в рамках своих собственных рациональных ограничений. Однозначно, интерактивные прототипы указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью общей картины, многие известные личности будут функционально разнесены на независимые элементы."/>
        </div>
    )
}