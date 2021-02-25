import React from 'react';
import Clef from '../types/Clef';
import MusicNoteSchema from '../schema/MusicNoteSchema';
import TimeSignatureSchema from '../schema/TimeSignatureSchema';

type StaffProps = {
  staffWidth: number;
  staffHeight: number;
  timeSignature: TimeSignatureSchema;
  clef: Clef;
  notes: MusicNoteSchema[];
};
type StaffState = {
  clientX?: number;
  clientY?: number;
} & StaffProps;

class Staff extends React.Component<StaffProps, StaffState> {
  constructor(props: StaffProps) {
    super(props);
    this.state = { ...props };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    const { clientX, clientY } = event;
    this.setState({ clientX, clientY });
  }
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.staffWidth + 'px'}
        height={this.props.staffHeight + 'px'}
        style={{
          border: '1px solid black',
        }}
        onMouseMove={this.handleMouseOver}
      >
        <path
          d={`M 0 ${(this.props.staffHeight / 5) * 0} L ${
            this.props.staffWidth
          } ${(this.props.staffHeight / 5) * 0}`}
          stroke="black"
        />
        <path
          d={`M 0 ${(this.props.staffHeight / 5) * 1} L ${
            this.props.staffWidth
          } ${(this.props.staffHeight / 5) * 1}`}
          stroke="black"
        />
        <path
          d={`M 0 ${(this.props.staffHeight / 5) * 2} L ${
            this.props.staffWidth
          } ${(this.props.staffHeight / 5) * 2}`}
          stroke="black"
        />
        <path
          d={`M 0 ${(this.props.staffHeight / 5) * 3} L ${
            this.props.staffWidth
          } ${(this.props.staffHeight / 5) * 3}`}
          stroke="black"
        />
        <path
          d={`M 0 ${(this.props.staffHeight / 5) * 4} L ${
            this.props.staffWidth
          } ${(this.props.staffHeight / 5) * 4}`}
          stroke="black"
        />
        {(() => {
          if (this.state.clientX && this.state.clientY) {
            return (
              <circle
                cx={this.state.clientX}
                cy={getAbsolutePositionOfLocale(
                  this.state.clientY,
                  this.props.staffHeight
                )}
                r={10}
              />
            );
          }
        })()}
      </svg>
    );
  }
}

export default Staff;
function getNearestLocale(y: number, height: number) {
  const normalizedPosition = (y / height) * 10;
  return Math.round(normalizedPosition);
}
function getAbsolutePositionOfLocale(y: number, height: number) {
  return (getNearestLocale(y, height) / 10) * height;
}
