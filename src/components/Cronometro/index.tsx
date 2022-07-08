import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";

interface Props{
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {

    const [tempo, setTempo] = useState<number>();
    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado?.tempo))
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha o card e inicie o cronômetro!
                Tempo: {tempo}
            </p>
            <div className={style.relogioWrapper}>
                <Relogio />

            </div>
            <Botao type="button">
                Iniciar
            </Botao>
            
        </div>

    )

}