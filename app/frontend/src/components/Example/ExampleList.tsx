import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "ช่วยหาข้อมูลเกี่ยวกับ Nozzle schedule", value: "ช่วยหาข้อมูลเกี่ยวกับ Nozzle schedule" },
    { text: "ช่วยสรุปเรื่อง reduce steam consumption?", value: "ช่วยสรุปเรื่อง reduce steam consumption" },
    { text: "อะไรคือ Office 365?", value: "อะไรคือ Office 365?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
