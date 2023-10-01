input ← &fras "input.txt"
lu ← ["ABC" "XYZ"]
Data ← ⊜(▽≠@ .↙3)≠@\n.input

CalcPair ← +×3◿3+1/-∶+1⊢⇌.≡⊗∶lu
CalcPairTwo ← ++1◿3-1/+∶×3⊢⇌.≡⊗∶lu

/+≡CalcPair Data
/+≡CalcPairTwo Data
