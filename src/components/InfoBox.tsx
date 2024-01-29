import { FC, PropsWithChildren } from 'react';
import { enumToString } from '../utils/utils';

export enum Mode {
  Hint,
  Warning
}

export enum Severity {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH'
}

type HintProps = PropsWithChildren<{
  mode: Mode.Hint;
}>;

type WarningProps = PropsWithChildren<{
  mode: Mode.Warning;
  severity: Severity;
}>;

type InfoBoxProps = HintProps | WarningProps;

const InfoBox: FC<InfoBoxProps> = props => {
  const { mode, children } = props;
  if (mode === Mode.Hint) {
    return (
      <aside className="infoBox infoBox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside
      className={`infoBox infoBox-warning warning--${enumToString(severity)}`}
    >
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
