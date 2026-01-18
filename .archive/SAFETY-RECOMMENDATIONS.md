# Safety Recommendations: Specific Actionable Measures

**Date:** January 2026  
**Based on:** SAFETY-ANALYSIS.md Deep Truth Analysis  
**Priority:** Ranked by risk reduction and implementation urgency

---

## Critical Priority (Must Implement Before Pilot Event)

### CR-1: Secure Event Liability Insurance

**Current Status:** "In progress" - not secured

**Required Actions:**
1. Obtain written insurance quote with explicit coverage for:
   - Electrical work (installation, modification, testing)
   - Thermal systems (oil immersion, water loop, heat pump)
   - Battery systems (lithium-ion storage, charging, discharging)
   - Grid connections (temporary installations)
   - Participant injury (bodily harm, property damage)
   - Environmental liability (oil spills, battery disposal)

2. Minimum Coverage Amounts:
   - **CHF 5 million** for persons and property damage (aggregate)
   - **CHF 1 million** professional indemnity for on-site engineers
   - Coverage for setup/teardown periods (extended coverage)
   - Coverage for rented equipment and venue damage

3. Insurance Provider Requirements:
   - Swiss-licensed insurer
   - Experience with technical events or maker spaces
   - Clear exclusions list (review for gaps)
   - Claims process documentation

4. Confirmation Deadline: **8 weeks before pilot event**

**Success Criteria:** Written insurance policy received, coverage confirmed, exclusions reviewed and acceptable

**Cost Estimate:** CHF 2,000-5,000 per event

**Risk Reduction:** High - Protects Verein and participants from catastrophic liability

---

### CR-2: Establish Independent Safety Officer Role

**Current Status:** Not defined

**Required Actions:**
1. Recruit Safety Officer with qualifications:
   - Licensed electrical engineer (Elektroinstallateur EFZ)
   - NIV installation license (Art. 15 or higher)
   - Minimum 5 years experience with electrical installations
   - Experience with battery systems or thermal systems (preferred)
   - Independent of event organizers (not board member, not participant)

2. Define Safety Officer Authority:
   - Can halt event or specific activities if safety risk identified
   - Can require modifications to equipment or procedures
   - Can exclude participants who violate safety protocols
   - Final authority on safety decisions (can override organizers)
   - Direct reporting to Verein board (not event organizers)

3. Safety Officer Responsibilities:
   - Pre-event: Review all safety plans, inspect equipment, verify compliance
   - During event: Continuous presence, daily safety inspections, incident response
   - Post-event: Safety review, incident analysis, recommendations

4. Compensation: CHF 500-1,000 per day (3 days = CHF 1,500-3,000)

**Success Criteria:** Safety Officer recruited and confirmed 4 weeks before event, authority defined in writing, contract signed

**Cost Estimate:** CHF 1,500-3,000 per event

**Risk Reduction:** Very High - Independent safety authority prevents conflicts of interest

---

### CR-3: Mandatory Safety Training & Certification

**Current Status:** Mentioned but not specified

**Required Actions:**
1. Develop Safety Training Content (minimum 4 hours):
   - **Module 1: Electrical Safety (1 hour)**
     - RCD/GFCI function and testing
     - Work under voltage restrictions
     - Ground fault prevention
     - Emergency procedures
   - **Module 2: Battery Safety (1 hour)**
     - Lithium battery hazards (thermal runaway, fire, explosion)
     - Battery handling and storage
     - BMS function and failure modes
     - Emergency response to battery incidents
   - **Module 3: Thermal Systems Safety (1 hour)**
     - Oil immersion: handling, storage, leak response
     - Water loop: electrical contact prevention, leak detection
     - Heat pump: high pressure, refrigerant safety
     - Burn prevention and first aid
   - **Module 4: Emergency Procedures (1 hour)**
     - Fire response and evacuation
     - Medical emergency procedures
     - Incident reporting
     - Emergency contacts

2. Implement Certification System:
   - Online training platform (Moodle, Teachable, or custom)
   - Certification exam (multiple choice, 80% pass rate required)
   - Certificate valid for 12 months
   - Database of certified participants

3. Enforcement:
   - Registration blocked until certification completed
   - Certificate verification at event check-in
   - Re-certification required if certificate expired

4. Development Timeline:
   - Content development: 4 weeks
   - Platform setup: 2 weeks
   - Testing: 2 weeks
   - **Total: 8 weeks before pilot event**

**Success Criteria:** Training platform live, >90% of registered participants certified before event

**Cost Estimate:** CHF 1,000-3,000 (platform + content development, one-time)

**Risk Reduction:** High - Ensures minimum safety knowledge for all participants

---

### CR-4: Pre-Event Safety Inspection

**Current Status:** Not planned

**Required Actions:**
1. Schedule Safety Inspection (2 weeks before event):
   - Licensed electrician (Safety Officer or designated inspector)
   - Venue electrical system inspection
   - All equipment inspection (batteries, thermal systems, electrical)
   - Fire suppression system verification
   - Emergency exit verification

2. Inspection Checklist:
   - **Electrical Systems:**
     - RCD/GFCI installation and testing (trip test)
     - Ground fault resistance measurement
     - Overcurrent protection verification
     - Wiring integrity check
   - **Battery Systems:**
     - Physical damage inspection
     - BMS function test
     - Certification verification (UN 38.3)
     - Storage conditions (temperature, ventilation)
   - **Thermal Systems:**
     - Leak containment (Leckwanne) installation
     - Leak detection system test
     - Temperature monitoring system test
     - Emergency stop system test
   - **Fire Safety:**
     - Fire suppression system test
     - Fire detection system test
     - Evacuation routes clear
     - Emergency equipment accessible

3. Safety Certificate (Sicherheitsnachweis):
   - Issued by licensed inspector
   - Documented inspection results
   - Valid for event duration
   - Filed with event documentation

4. Non-Compliance Response:
   - Issues identified must be resolved before event
   - Re-inspection required if major issues found
   - Event cannot proceed without valid safety certificate

**Success Criteria:** Safety certificate issued, all issues resolved, certificate on file

**Cost Estimate:** CHF 500-1,500 (inspector fees)

**Risk Reduction:** Very High - Identifies and resolves safety issues before event

---

### CR-5: Real-Time Safety Monitoring System

**Current Status:** Not planned

**Required Actions:**
1. Deploy Sensor Network:
   - **Temperature Sensors:** Battery cells, oil tank, water loop, ambient
   - **Current Sensors:** Battery charge/discharge, compute load, grid connection
   - **Voltage Sensors:** Battery voltage, grid voltage, system voltage
   - **Flow Sensors:** Water loop flow rate, oil circulation
   - **Leak Detection:** Oil containment, water containment
   - **Smoke/Heat Detection:** Fire detection

2. Data Collection System:
   - IoT platform (Home Assistant, Node-RED, or custom)
   - Real-time data logging (1-second intervals)
   - Data storage (local + cloud backup)
   - Dashboard for Safety Officer monitoring

3. Anomaly Detection Algorithms:
   - **Battery Anomalies:**
     - Temperature rise rate >1°C/minute
     - Voltage deviation >5% from expected
     - Current spike >150% rated capacity
   - **Thermal Anomalies:**
     - Oil temperature >80°C
     - Water temperature >70°C
     - Flow rate drop >50%
   - **Electrical Anomalies:**
     - Ground fault current >10mA
     - Overcurrent >120% rated
     - Voltage drop >10%

4. Alert System:
   - **Level 1 (Warning):** Visual alert on dashboard, log entry
   - **Level 2 (Caution):** Audio alert, SMS to Safety Officer
   - **Level 3 (Critical):** Emergency stop trigger, SMS to all safety personnel, evacuation alert

5. Automated Safety Triggers:
   - Battery thermal runaway detected → Emergency stop, fire suppression activation
   - Electrical fault detected → RCD trip, system shutdown
   - Oil leak detected → Containment activation, alert
   - Fire detected → Fire suppression activation, evacuation alert

**Success Criteria:** Monitoring system deployed and tested 1 week before event, all sensors calibrated, alert system functional

**Cost Estimate:** CHF 2,000-5,000 (sensors, platform, development)

**Risk Reduction:** Very High - Early warning enables proactive response

---

## High Priority (Should Implement Before Full Event)

### HP-1: Redundant Safety Systems

**Actions:**
1. Install backup RCD/GFCI devices (parallel installation)
2. Manual emergency stop (hardware switch, independent of software)
3. Multiple fire suppression methods (dry chemical + foam)
4. Backup power for safety systems (UPS or battery backup)

**Cost Estimate:** CHF 1,000-2,000

**Risk Reduction:** High - Eliminates single points of failure

---

### HP-2: Leak Containment & Detection

**Actions:**
1. Install Leckwanne (containment) for all oil systems (minimum 110% tank volume)
2. Deploy leak detection sensors (conductivity, float, optical)
3. Develop spill response procedures
4. Secure environmental disposal plan (certified hazardous waste handler)

**Cost Estimate:** CHF 500-1,500

**Risk Reduction:** High - Prevents environmental contamination

---

### HP-3: On-Site Medical Response

**Actions:**
1. Establish first aid station with trained personnel (Red Cross certified)
2. Install Automated External Defibrillator (AED)
3. Coordinate with local hospital (emergency contact, transport plan)
4. Develop medical emergency response plan

**Cost Estimate:** CHF 500-1,000

**Risk Reduction:** Medium-High - Enables rapid medical response

---

### HP-4: Battery Safety Protocols

**Actions:**
1. Pre-event battery inspection (physical damage, certification)
2. Battery storage requirements (temperature-controlled, ventilated)
3. BMS verification and testing (function test, calibration)
4. Thermal runaway detection and response (sensors, procedures)

**Cost Estimate:** CHF 500-1,000

**Risk Reduction:** High - Prevents battery-related incidents

---

### HP-5: Fire Safety Systems

**Actions:**
1. Install fire suppression compatible with oil (dry chemical, foam)
2. Deploy fire detection (heat, smoke sensors)
3. Verify evacuation routes and procedures
4. Obtain fire safety permit from cantonal authorities

**Cost Estimate:** CHF 1,000-3,000

**Risk Reduction:** Very High - Prevents fire-related injuries and damage

---

## Medium Priority (Implement Before Full Event)

### MP-1: Pre-Event Safety Simulations

**Actions:**
1. Develop thermal runaway simulation models
2. Create electrical fault tree analysis
3. Model system integration failure modes
4. Simulate participant behavior (fatigue, error rates)

**Cost Estimate:** CHF 2,000-5,000 (development)

**Risk Reduction:** Medium - Identifies risks before event

---

### MP-2: Safety Governance Structure

**Actions:**
1. Establish Safety Committee (electrical, fire, medical experts)
2. Implement daily safety briefings
3. Develop incident reporting protocol
4. Create post-event safety review process

**Cost Estimate:** CHF 500-1,000 (committee compensation)

**Risk Reduction:** Medium - Improves safety culture and response

---

### MP-3: Equipment Modification Controls

**Actions:**
1. Mark safety-critical components "Do Not Modify"
2. Implement modification approval process
3. Require pre-modification safety review
4. Conduct post-modification inspection

**Cost Estimate:** CHF 200-500 (labels, process development)

**Risk Reduction:** Medium - Prevents unsafe modifications

---

### MP-4: Environmental Compliance

**Actions:**
1. Secure battery disposal plan (certified recycler)
2. Secure oil disposal plan (hazardous waste classification)
3. Obtain environmental permit if required
4. Develop spill response and cleanup procedures

**Cost Estimate:** CHF 500-2,000 (disposal fees, permits)

**Risk Reduction:** Medium - Prevents regulatory violations

---

### MP-5: Participant Safety Briefings

**Actions:**
1. Conduct daily safety reminders (morning briefings)
2. Distribute incident reporting procedures
3. Provide emergency contact information
4. Mark safety equipment locations

**Cost Estimate:** CHF 100-300 (materials, time)

**Risk Reduction:** Low-Medium - Reinforces safety awareness

---

## Implementation Timeline

### Before Pilot Event (April/May 2026)

**Week -8:** Insurance secured, Safety Officer recruited  
**Week -6:** Safety training content developed  
**Week -4:** Safety training platform live, participants begin certification  
**Week -2:** Pre-event safety inspection conducted  
**Week -1:** Real-time monitoring system deployed and tested  
**Week 0:** Event proceeds with all critical measures in place

### Before Full Event (September 2026)

**Month -3:** High priority measures implemented  
**Month -2:** Medium priority measures implemented  
**Month -1:** Final safety review, all systems tested  
**Month 0:** Full event with comprehensive safety measures

---

## Cost Summary

**Critical Priority:** CHF 6,000-15,000  
**High Priority:** CHF 3,500-8,500  
**Medium Priority:** CHF 3,300-9,300  
**Total:** CHF 12,800-33,800

**Note:** Some costs are one-time (training development, simulation models), others are per-event (insurance, Safety Officer, inspections).

---

## Risk Reduction Summary

| Recommendation | Risk Reduction | Cost | Priority |
|----------------|----------------|------|----------|
| Insurance | High | Medium | Critical |
| Safety Officer | Very High | Low | Critical |
| Safety Training | High | Low | Critical |
| Pre-Event Inspection | Very High | Low | Critical |
| Real-Time Monitoring | Very High | Medium | Critical |
| Redundant Systems | High | Low | High |
| Leak Containment | High | Low | High |
| Medical Response | Medium-High | Low | High |
| Battery Protocols | High | Low | High |
| Fire Safety | Very High | Medium | High |

---

**Next Steps:** See SAFETY-GOVERNANCE.md for organizational structure and AI-SIMULATION-SPEC.md for technical specifications.
