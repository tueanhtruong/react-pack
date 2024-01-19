import { Stepper } from "src/components";
import { Step } from "src/components/Steppers";
import { View } from "src/components/commons";
import "./styles.scss";

const steps: Step[] = [
  {
    label: "Research and Development",
    description: "Cervicocranial syndrome",
  },
  {
    label: "Engineering",
    description: "Monoc esotrop w a pattrn",
  },
  {
    label: "Accounting",
    description: "Miliary TB NEC-histo dx",
  },
  {
    label: "Marketing",
    description: "Teething syndrome",
  },
  {
    label: "Support",
    description: "AMI inferopost, initial",
  },
  {
    label: "Sales",
    description: "Helminth arthrit-up/arm",
  },
  {
    label: "Engineering",
    description: "Lt-for-dates 750-999g",
  },
  {
    label: "Engineering",
    description: "Simp schiz-subchr/exacer",
  },
  {
    label: "Engineering",
    description: "Chr laryngotracheitis",
  },
  {
    label: "Accounting",
    description: "Dislocat site NEC-closed",
  },
  {
    label: "Accounting",
    description: "Injury-NEC",
  },
  {
    label: "Engineering",
    description: "Protan defect",
  },
];

const DemoStepper: React.FC = () => {
  return (
    <View className="view-container">
      <View>
        <p>Stepper</p>
        <br />
        <Stepper.Wrapper>
          {steps.slice(0, 3).map((step) => (
            <Stepper.StepButton
              label={step.label}
              key={`${step.label}-${step.description}`}
            >
              <View isRowWrap align="flex-start" style={{ gap: "0.5rem" }}>
                <p style={{ fontSize: "0.9rem" }}>{step.description}</p>
              </View>
            </Stepper.StepButton>
          ))}
        </Stepper.Wrapper>
      </View>
      <View>
        <p>Default Stepper</p>
        <br />
        <Stepper.Wrapper>
          {steps.map((step) => (
            <Stepper.StepButton
              label={step.label}
              key={`${step.label}-${step.description}`}
            >
              <View isRowWrap align="flex-start" style={{ gap: "0.5rem" }}>
                <p style={{ fontSize: "0.9rem" }}>{step.description}</p>
              </View>
            </Stepper.StepButton>
          ))}
        </Stepper.Wrapper>
      </View>

      <View style={{ maxWidth: 200, maxHeight: 800 }}>
        <p>Horizontal Stepper</p> <br />
        <Stepper.Wrapper orientation="vertical">
          {steps.map((step) => (
            <Stepper.StepButton
              label={step.label}
              key={`${step.label}-${step.description}`}
            >
              <View isRowWrap align="flex-start" style={{ gap: "0.5rem" }}>
                <p style={{ fontSize: "0.9rem" }}>{step.description}</p>
              </View>
            </Stepper.StepButton>
          ))}
        </Stepper.Wrapper>
      </View>
    </View>
  );
};

export default DemoStepper;
