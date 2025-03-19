// data.js

var installerData = {
    "[*][8] -- Installer Programming Options Dir (p: 56-122)": {
      "✔= Default": "",
      "Description": "Test",
      "[000] Label Programming (p: 60)": {
        "Description": "Test",
        "000 Label Programming (p: 60)": {
          "000 -- Language Selection (01)": "",
          "001 -- Zone Labels": {
            "001-128 -- Zone Labels 1-128": ""
          },
          "051 -- Zone Tamper Label": "",
          "052 -- Zone Fault Label": "",
          "064 -- CO Alarm Message": "",
          "065 -- Fire Alarm Message": "",
          "066 -- Fail to Arm Event Message": "",
          "067 -- Alarm When Armed Event Message": "",
          "100 -- System Label": "",
          "101-108 -- Partition 1-8 Labels": "",
          "201-208 -- Partition 1-8 Command Output Labels": {
            "001-004 -- Command output 1-4 Labels": ""
          },
          "601-604 -- Schedule 1-4 Labels": "",
          "801 -- Keypad Labels": {
            "001-016 -- Keypad 1-16 Labels": ""
          },
          "802 -- HSM2108 Zone Expander Module Labels": {
            "001-015 -- Zone Expander 1-15 Labels": ""
          },
          "803 -- HSM2208 Low Current Output Expander Module Labels": {
            "001-016 -- Output Expander 1-16 Labels": ""
          },
          "806 -- HSM2HOST Module Label": "",
          "808 -- HSM2955 Two-Way Audio Module Label": "",
          "809 -- HS2300 Power Supply Module Label": {
            "001-004 -- Power Supply 1-4 Label": ""
          },
          "810 -- HSM2204 High Current Output Supply Module Label": {
            "001-004 -- O/P Expander 1-4 Label": ""
          },
          "815 -- Alternate Communicator Label": "",
          "820 -- Siren Label": {
            "001-016 -- Siren 1-16 Label": ""
          },
          "821 -- Repeater Label (PG9920)": {
            "001-008 -- Repeater 1-8 Label": ""
          },
          "999 -- Default Labels": ""
        }
      },
      "[001] -- [002] Zone Type (p: 63)": {
        "001 -- Zone Definitions / Type (p: 63)": {
          "001-128 Zone Definitions / Types (000)": {
            "000 -- Null Zone": "",
            "001 -- Delay 1": "",
            "002 -- Delay 2": "",
            "003 -- Instant": "",
            "004 -- Interior": "",
            "005 -- Interior Stay/Away": "",
            "006 -- Delay Stay/Away": "",
            "007 -- Delayed 24-Hour Fire": "",
            "008 -- Standard 24-Hour Fire": "",
            "009 -- Instant Stay/Away": "",
            "010 -- Interior Delay": "",
            "011 -- Day Zone": "",
            "012 -- Night Zone": "",
            "016 -- Final Door Set": "",
            "017 -- 24-Hour Burglary": "",
            "018 -- 24-Hour Bell/Buzzer": "",
            "023 -- 24-Hour Supervisory": "",
            "024 -- 24-Hour Supervisory Buzzer": "",
            "025 -- Auto Verify Fire": "",
            "027 -- Fire Supervisory": "",
            "040 -- 24-Hour Gas": "",
            "041 -- 24-Hour CO": "",
            "042 -- 24-Hour Holdup": "",
            "043 -- 24-Hour Panic": "",
            "045 -- 24-Hour Heat": "",
            "046 -- 24-Hour Medical*": "",
            "047 -- 24-Hour Emergency": "",
            "048 -- 24-Hour Sprinkler": "",
            "049 -- 24-Hour Flood": "",
            "051 -- 24-Hour Latching Tamper": "",
            "052 -- 24-Hour Non-Alarm": "",
            "056 -- 24-Hour High Temperature": "",
            "057 -- 24 Hour Low Temperature": "",
            "060 -- 24-Hour Non-Latching Tamper": "",
            "066 -- Momentary Keyswitch Arm": "",
            "067 -- Maintained Keyswitch Arm": "",
            "068 -- Momentary Keyswitch Disarm": "",
            "069 -- Maintained Keywsitch Disarm": "",
            "071 -- Doorbell Zone": "",
            "072 -- Push to Set (Non CP-01 panels only)": ""
          }
        },
        "002 -- Zone Attributes (p: 67)": {
          "001-0128 (see PowerSeries Neo reference manual for defaults)": {
            "1 -- Bell Audible": "",
            "2 -- Bell Steady": "",
            "3 -- Door Chime": "",
            "4 -- Bypass Enabled": "",
            "5 -- Force Arm": "",
            "6 -- Swinger Shutdown": "",
            "7 -- Transmission Delay": "",
            "8 -- Burglary Verification": "",
            "9 -- Normally Closed EOL": "",
            "10 -- Single EOL": "",
            "11 -- Double EOL": "",
            "12 -- Fast Loop/Normal Loop Response": "",
            "13 -- Zone 2-way Audio Activation": "",
            "14 -- Holdup Verification": ""
          }
        }
      },
      "[005] System Times (p: 68)": {
        "005 -- System Times (p: 68)": {
          "000 -- System Area": {
            "Bell Cutoff (004 min.)": "",
            "Bell Delay Time (000 min.)": "",
            "Burglary Verification Timer (060 sec.)": "",
            "Holdup Verification Timer (008 sec.)": "",
            "Zone Loop Response (250 ms)": "",
            "Automatic Clock Adjust (060 sec.)": ""
          },
          "001 -- 008 System Times -- Partition 1-8": {
            "Entry Delay 1 (030 sec.)": "",
            "Entry Delay 2 (045 sec.) (CP-01 030 sec.)": "",
            "Exit Delay (120 sec.) (CP-01 060 sec.)": "",
            "Settle Delay (010 sec.) (CP-01 000 sec.)": ""
          },
          "900 -- Bell Delay Partition Mask 1-8 (Y,Y,Y,Y,Y,Y,Y,Y)": "",
          "901 -- Daylight Savings Begin": {
            "Month (003)": "",
            "Week (002)": "",
            "Day (000)": "",
            "Hour (002)": "",
            "Increment (001)": ""
          },
          "902 -- Daylight Savings End": {
            "Month (011)": "",
            "Week (001)": "",
            "Day (000)": "",
            "Hour (002)": "",
            "Decrement (001)": ""
          }
        }
      },
      "[006] Access Codes (p: 70)": {
        "006 Installer Defined Access Codes (p: 70)": {
          "(4-digit decimal)": "",
          "001 -- Installer Code (55555555)": "",
          "002 -- Master Code (12345678)": "",
          "003 -- Maintenance Code (AAAAAAAA)": "",
          "004 -- Guard Code (AAAAAAAA)": "",
          "005 - Code Version (000)": ""
        }
      },
      "[007] -- [012] PGM Programming (p: 70)": {
        "007 -- PGM Partition Assignment (p: 71)": {
          "000 -- Main Bell Partition Assignment": {
            "1 -- Partition 1": "",
            "2 -- Partition 2": "",
            "3 -- Partition 3": "",
            "4 -- Partition 4": "",
            "5 -- Partition 5": "",
            "6 -- Partition 6": "",
            "7 -- Partition 7": "",
            "8 -- Partition 8": ""
          },
          "001-164 -- PGM 1-164 Partition Assignment (default: partition 1)": {
            "1-8 -- Partition 1-8": ""
          }
        },
        "008 -- PGM Timer Programming (p: 71)": {
          "000 -- PGM Timer-Minutes or Seconds (seconds)": "",
          "001-164 -- PGM 1-164 Timer (005)": ""
        },
        "009 -- PGM Definitions / Types (p: 71)": {
          "001-164 -- PGM 1-164 Definitions / Type Assignment (default: PGM1=121, PGM2=156, PGM 3-164 =101)": {
            "100 -- Null PGM": "",
            "101 -- Burg and Fire Bell Follower": "",
            "102 -- Delayed Fire and Burg": "",
            "103 -- Sensor Reset [*][7][2]": "",
            "104 -- 2-Wire Smoke": "",
            "109 -- Courtesy Pulse": "",
            "111 -- Keypad Buzzer Follow": "",
            "114 -- Ready To Arm": "",
            "115 -- System Armed Status": "",
            "116 -- Away Armed Status": "",
            "117 -- Stay Armed Status": "",
            "120 -- Away Armed with no Zone Bypass Status": "",
            "121 -- Command Output 1": "",
            "122 -- Command Output 2": "",
            "123 -- Command Output 3": "",
            "124 -- Command Output 4": "",
            "129 -- Partition Status Alarm Memory": "",
            "132 -- Holdup Output": "",
            "134 -- 24Hr Silent Input": "",
            "135 -- 24Hr Audible Input": "",
            "146 -- TLM and Alarm": "",
            "147 -- Kissoff": "",
            "148 -- Ground Start": "",
            "149 -- Alternate Communicator": "",
            "155 -- System Trouble": "",
            "156 -- Latched System Event": "",
            "157 -- System Tamper": "",
            "161 -- DC Trouble": "",
            "165 -- Prox Used": "",
            "166 -- Partition Prox Used": "",
            "175 -- Bell Status and Programming Access Output": "",
            "176 -- Remote Operation": "",
            "184 -- Open After Alarm": "",
            "200 -- Zone Follower": "",
            "201 -- Follower-Zones 1-8": "",
            "202 -- Follower-Zones 9-16": "",
            "203 -- Follower-Zones 17-24": "",
            "204 -- Follower-Zones 25-32": "",
            "205 -- Follower-Zones 33-40": "",
            "206 -- Follower-Zones 41-48": "",
            "207 -- Follower-Zones 49-56": "",
            "208 -- Follower-Zones 57-64": "",
            "209 -- Follower-Zones 65-72": "",
            "210 -- Follower-Zones 73-80": "",
            "211 -- Follower-Zones 81-88": "",
            "212 -- Follower-Zones 89-96": "",
            "213 -- Follower-Zones 97-104": "",
            "214 -- Follower-Zones 105-112": "",
            "215 -- Follower-Zones 113-120": "",
            "216 -- Follower-Zones 120-128": ""
          }
        },
        "010 -- PGM Attributes (p: 76)": {
          "000 -- Main Bell Mask": {
            "1 - Fire Alarm ✔": "",
            "2 - CO Alarm ✔": "",
            "3 - Burglary Alarm ✔": "",
            "4 - 24-Hour Flood Alarm ✔": "",
            "5 - Bell Squawks ✔": ""
          },
          "001-164 PGM 1-164 Attributes": {
            "1 -- True Output ✔": "",
            "2 -- 8 Attributes depends on the PGM type assigned in [009]": "",
            "9 -- show more options": {
              "1 -- 8 = 9 to 16 Attributes depends on the PGM type assigned [009]": ""
            }
          },
          "Attributes List per PGM type assigned [009]": {
            "100 -- Null PGM": "",
            "101 -- Fire and Burglary": {
              "01 -- True Output ✔": "",
              "03 -- Code Required ✔": ""
            },
            "102 -- Delay Fire and Burglary": {
              "01 -- True Output": ""
            },
            "103 -- Sensor Reset [*][7][2]": {
              "03 -- Code Required": ""
            },
            "109 -- Courtesy Pulse": {
              "01 -- True Output": ""
            },
            "111 -- Keypad Buzzer Follow": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": "",
              "09 -- Entry Delay ✔": "",
              "10 -- Exit Delay ✔": "",
              "11 -- Door Chime ✔": "",
              "12 -- Keypad Buzzer Zone ✔": "",
              "13 -- Audible Exit Fault ✔": "",
              "14 -- Auto-Arm Pre-Alert ✔": ""
            },
            "114 -- Ready To Arm": {
              "01 -- True Output ✔": ""
            },
            "115 -- Armed Status": {
              "01 -- True Output ✔": ""
            },
            "116 -- Armed Away Mode": {
              "01 -- True Output ✔": ""
            },
            "117 -- Armed Stay Mode": {
              "01 -- True Output ✔": ""
            },
            "121 - 124 -- Command Output 1-4": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output ✔": "",
              "03 -- Code Required ✔": "",
              "(NZ off)": ""
            },
            "129 -- Partition Status Alarm Memory": {
              "01 -- True Output ✔": ""
            },
            "132 -- Holdup Output": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": ""
            },
            "146 -- TLM and Alarm": {
              "01 -- True Output ✔": ""
            },
            "147 -- Kissoff Output": {
              "01 -- True Output ✔": ""
            },
            "148 -- Ground Start": {
              "01 -- True Output ✔": ""
            },
            "149 -- Alternate Communicator": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output ✔": "",
              "04 -- Fire Alarm": "",
              "05 -- Panic Alarm": "",
              "06 -- Burglary Alarm": "",
              "07 -- Open/Close": "",
              "08 -- Zone Auto Bypass": "",
              "09 -- Medical Alarm": "",
              "10 -- Burglary Verified": "",
              "11 -- Open after Alarm": "",
              "12 -- Emergency Alarm": "",
              "13 -- Duress Alarm": "",
              "14 -- Holdup Verified": ""
            },
            "155 -- System Trouble": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": "",
              "04 -- Service Required ✔": "",
              "05 -- Loss of Clock ✔": "",
              "06 -- AC Fail ✔": "",
              "07 -- DC Fail ✔": "",
              "08 -- TLM ✔": "",
              "09 -- FTC ✔": "",
              "10 -- Ethernet ✔": "",
              "11 -- Zone Fault ✔": "",
              "12 -- Zone Tamper ✔": "",
              "13 -- Zone Low Battery ✔": ""
            },
            "156 -- Latched System Event": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": "",
              "04 -- Fire Alarm ✔": "",
              "05 -- Panic Alarm ✔": "",
              "06 -- Burglary Alarm ✔": "",
              "07 -- Medical Alarm ✔": "",
              "08 -- Supervisory ✔": "",
              "09 -- Priority Event ✔": "",
              "10 -- Holdup ✔": "",
              "11 -- Duress ✔": "",
              "12 -- Emergency ✔": "",
              "13 -- Fire Supervisory ✔": "",
              "14 -- Fire Trouble ✔": "",
              "15 -- CO Alarm ✔": ""
            },
            "157 -- System Tamper": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": "",
              "09 -- Module Tamper ✔": "",
              "10 -- Zone Tampers ✔": ""
            },
            "161 -- DC Trouble": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": "",
              "09 -- Battery Low ✔": "",
              "10 -- Battery Absent ✔": ""
            },
            "165 -- Prox Used": {
              "01 -- True Output ✔": ""
            },
            "166 -- Partition Prox Used": {
              "01 -- True Output ✔": ""
            },
            "175 -- Bell Prog Access": {
              "01 -- True Output ✔": ""
            },
            "176 -- Remote Operation": {
              "01 -- True Output ✔": ""
            },
            "184 -- Open After Alarm": {
              "01 -- True Output ✔": "",
              "02 -- PGM Timer ✔": ""
            },
            "200 Zone Follower -- Single Zone": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": "",
              "03 -- Code Required": "",
              "04 -- Latching": "",
              "05 -- Follow Alarm": ""
            },
            "201- 216 Zone Follow Zones 1-128": {
              "01 -- True Output ✔": "",
              "02 -- Timed Output": "",
              "04 -- Latching": "",
              "05 -- Follow Alarm": "",
              "09-016 -- Zone Terminal 1-16": ""
            }
          }
        },
        "011 -- PGM Configuration Options (p: 84)": {
          "001-164 -- PGM 1-164 Configuration": {
            "Zone Follower by Zone": "",
            "Proximity Tag Used": "",
            "Command Output Schedules": ""
          }
        },
        "012 -- System Lockout (attempts/min.) (P: 84)": {
          "Keypad Lockout Attempts (000)": "",
          "Keypad Lockout Duration (000)": "",
          "Remote Lockout Attempts (006)": "",
          "Remote Lockout Duration (060)": ""
        }
      },
      "[013] -- [304] System Options (p: 85)": {
        "013 -- System Options 1 (p: 85)": {
          "1 -- NC Loop/EOL": "",
          "2 -- DEOL/SEOL": "",
          "3 -- Show All Troubles when Armed ✔": "",
          "4 -- Tamper/Faults Do Not Show As Open": "",
          "5 -- Auto-Arm Schedule in [*][6] ✔": "",
          "6 -- Audible Exit Fault ✔": "",
          "7 -- Event Buffer Follows Swinger ✔": "",
          "8 -- Temporal Three Fire Signaling": ""
        },
        "014 -- System Options 2 (p: 86)": {
          "1 -- Bell Squawk": "",
          "2 -- Bell Squawk Auto-Arm": "",
          "3 -- Bell Squawk on Exit": "",
          "4 -- Bell Squawk on Entry": "",
          "5 -- Bell Squawk on Trouble": "",
          "6 -- Not Used": "",
          "7 -- Exit Delay Termination": "",
          "8 -- Fire Bell Continues": ""
        },
        "015 -- System Options 3 (p: 86)": {
          "1 -- [F] (Fire) Key Enabled ✔": "",
          "2 -- [P] (Panic) Key Audible": "",
          "3 -- Quick Exit": "",
          "4 -- Quick Arming/Function Key ✔ (if disable system is going to ask for code to disarm)": "",
          "5 -- Not Used": "",
          "6 -- Master Code Not User Changeable": "",
          "7 -- TLM (Telephone Line Monitor) Enable ✔": "",
          "8 -- TLM (Telephone Line Monitor) Audible When Armed": ""
        },
        "016 -- System Options 4 (p: 87)": {
          "1 -- AC Trouble Display ✔": "",
          "2 -- AC Trouble Light Flashes": "",
          "3 -- Keypad Blanking": "",
          "4 -- Keypad Blanking Requires Code": "",
          "5 -- Keypad Backlighting ✔": "",
          "6 -- Power Save Mode": "",
          "7 -- Bypass Display When Armed": "",
          "8 -- Keypad Tampers Enabled": ""
        },
        "017 -- System Options 5 (p: 88)": {
          "1 -- Chime On Opening": "",
          "2 -- Chime On Closing": "",
          "3 -- RF Jam Audible (Trouble Beeps)": "",
          "4 -- Multi-Hit": "",
          "5 -- Late to Close": "",
          "6 -- Daylight Savings Time": "",
          "7 -- Silence Chime During Quick Exit Delay": "",
          "8 -- Bell Squawk on Away Arm/Disarm Only": ""
        },
        "018 -- System Options 6 (p: 89)": {
          "1 -- Test Transmission Exception": "",
          "2 -- Real-Time Bypass Reporting": "",
          "3 -- Armed State PGM ON at End of Exit Delay": "",
          "4 -- Not Used": "",
          "5 -- Keypad Buzzer Alarm": "",
          "6 -- Not Used": "",
          "7 -- Exit Delay Restart (CP-01 ✔)": "",
          "8 -- AC Fail Trouble Beeps": ""
        },
        "019 -- System Options 7 (p: 90)": {
          "1 -- Audible Wireless Zone Fault": "",
          "2 -- Latching Troubles (UK ✔)": "",
          "3 -- Not Used": "",
          "4 -- R-Button": "",
          "5 -- Audible Bus Fault (UK ✔)": "",
          "6 -- Duress Codes": "",
          "7 -- Temperature in Celsius ✔": "",
          "8 -- Reset After Zone Activation": ""
        },
        "020 -- System Options 8 (p: 91)": {
          "1 -- Access Code Entry During Entry Delay": "",
          "2 -- EU Entry Procedure (UK ✔)": "",
          "3 -- [*][8] Access While Armed": "",
          "4 -- Remote Reset": "",
          "5 -- Engineer's Reset": "",
          "6 -- Keyswitch Disarming During Entry Delay": "",
          "7 -- Installer Access and DLS": "",
          "8 -- Troubles Inhibits Arming": ""
        },
        "021 -- System Options 9 (p: 92)": {
          "1 -- Trbl Display": "",
          "2 -- Keypad Blanking while armed (UK ✔)": "",
          "3 -- Auto-Arming Bypass": "",
          "4 -- Ready Display": "",
          "5 -- PGM Keypad Blanking": "",
          "6 -- Armed Display": "",
          "7 -- Open Cancels Arming (UK ✔)": "",
          "8 -- Audible Exit Delay for Stay Arming": ""
        },
        "022 -- System Options 10 (p: 93)": {
          "1 -- [F] (Fire) Key Option": "",
          "2 -- Not Used": "",
          "3 -- Not Used": "",
          "4 -- Test Transmission Counter in Hours (timer test in hours)": "",
          "5 -- Away to Stay Toggle": "",
          "6 -- 2-Way Full Duration ✔": "",
          "7 -- Trouble Beeps Are Silent": "",
          "8 -- Keyswitch Arms in Away Mode (UK ✔)": ""
        },
        "023 -- System Options 11 (p: 94)": {
          "1 -- Ready LED Flash for Force Arm": "",
          "2 -- Not Used": "",
          "3 -- Tamper/Fault Detection": "",
          "4 -- Access Code Required for [*][1]": "",
          "5 -- Access Code Required for [*][2]": "",
          "6 -- Access Code Required for [*][3]": "",
          "7 -- Access Code Required for [*][4]": "",
          "8 -- [*][6] Accessibility": ""
        },
        "024 -- System Options 12 (p: 94)": {
          "1-- 50Hz AC / 60 Hz AC (ARG ✔)(EN ✔)(AUS ✔)(NZ ✔)(CHN ✔)(SA ✔)(CE ✔)(FRA ✔)(UK ✔)": "",
          "2 -- Crystal Timebase": "",
          "3 -- AC/DC Inhibits Arming (UK ✔)": "",
          "4 -- Tamper Inhibit Arm": "",
          "5 -- Real Time Clock Option": "",
          "6 -- Not Used": "",
          "7 -- AC Brownout Detection (This option must be enabled for UL/ULC Commercial Fire Installations.)": "",
          "8 -- DLS Disconnect": ""
        },
        "025 -- System Options 13 (p: 95)": {
          "1 -- European Dial (ARG ✔)l(EN ✔)(AUS ✔)(BRAZIL ✔)(SA ✔)(CE ✔)2 -- Force Dial ✔": "",
          "3 -- Test Transmission Counter in Minutes (timer test in minutes)": "",
          "4 -- Not Used": "",
          "5 -- ID Tone": "",
          "6 -- (ID Tone) Tone Generated-2100Hz": "",
          "7 -- 1 Hour DLS Window": "",
          "8 -- FTC (Failure to Communicate) Audible Bell": ""
        },
        "040 -- User Authentication (p: 96)": {
          "01 -- User Code or Proximity Tag ✔": "",
          "02 -- User Code and Proximity Tag": ""
        },
        "041 -- Access Code Digits (p: 96)": {
          "00 -- 4-Digit Access Codes ✔": "",
          "01 -- 6-Digit Access Codes": "",
          "02 -- 8-Digit Access Codes": ""
        },
        "042 -- Event Verification (Verified Events) (p: 96)": {
          "01 -- Burglary Verified Counter (002) (UK 003)": "",
          "02 -- Holdup Verification Counter (002)": "",
          "03 -- Burglary Verification Selection": {
            "001 -- Police Code ✔": "",
            "002 -- Cross Zoning": "",
            "003 -- EU Sequential Detection (UK ✔)": ""
          }
        },
        "151-158 Partition 1-8 Auto-Arm/Disarm (p: 98)": {
          "001 -- Auto-Arming Times (9999)": {
            "24-Hour": "",
            "Sunday": "",
            "Monday": "",
            "Tuesday": "",
            "Wednesday": "",
            "Thursday": "",
            "Friday": "",
            "Saturday": ""
          },
          "002 -- Auto-Disarm Times (9999)": {
            "24-Hour": "",
            "Sunday": "",
            "Monday": "",
            "Tuesday": "",
            "Wednesday": "",
            "Thursday": "",
            "Friday": "",
            "Saturday": ""
          },
          "003 -- Auto-Disarming Holiday Schedule": {
            "Holiday 1": "",
            "Holiday 2": "",
            "Holiday 3": "",
            "Holiday 4": ""
          },
          "004 -- Auto-Arming Pre-Alert (004)": "",
          "005 -- Auto-Arming Postpone Timer (000)": "",
          "006 -- No Activity Arming Timer (000)": "",
          "007 -- No Activity Arming Pre-Alert Timer (001)": ""
        },
        "200 Partition Mask (Enable Partition) (p: 99)": {
          "001 -- Partition 1 to 8 Enable Mask": {
            "1 -- Partition 1 ✔": "",
            "2 -- Partition 2": "",
            "3 -- Partition 3": "",
            "4 -- Partition 4": "",
            "5 -- Partition 5": "",
            "6 -- Partition 6": "",
            "7 -- Partition 7": "",
            "8 -- Partition 8": ""
          }
        },
        "201-208 Partition 1-8 Zone Assignment (Mask) (Enable Zones) (p: 99)": {
          "001 -- Zone 1-8 ✔": "",
          "002 -- Zn 9-16 ✔": "",
          "003 -- Zn 17-24": "",
          "004 -- Zn 25-32": "",
          "005 -- Zn 33-40": "",
          "006 -- Zn 41-48": "",
          "007 -- Zn 49-56": "",
          "008 -- Zn 57-64": "",
          "009 -- Zn 65-72": "",
          "010 -- Zn 73-80": "",
          "011 -- Zn 81-88": "",
          "012 -- Zn 89-96": "",
          "013 -- Zn 97-104": "",
          "014 -- Zn 105-112": "",
          "015 -- Zn 113-120": "",
          "016 -- Zn 121-128": ""
        },
        "300 Panel/Receiver Communications Path (p: 99)": {
          "001 -- 004 Receiver 1-4": {
            "01 -- Phone Line ✔": "",
            "02 -- Alt Comm Auto Routing": "",
            "03 -- Alt Comm Rec 1 - Ethernet": "",
            "04 -- Alt Comm Rec 2 - Ethernet": "",
            "05 -- Alt Comm Rec 3 - Cellular": "",
            "06 -- Alt Comm Rec 4 - Cellular": ""
          }
        },
        "301 Phone Number Programming (p: 100)": {
          "001 -- 004 Phone Number 1 -4 Programming (DFFF...32-digit)": ""
        },
        "304 Call Waiting Cancel String (p: 100)": {
          "6-digit (DB70EF)": ""
        }
      },
      "[307] -- [308] Event Reporting (p: 100)": {
        "307 Zone Reporting (p: 100)": {
          "001-128 Zone Reporting for Zones 1-128": {
            "01 -- Alarm ✔": "",
            "02 -- Alarm Restore ✔": "",
            "03 -- Tamper ✔": "",
            "04 -- Tamper Restore ✔": "",
            "05 -- Fault ✔": "",
            "06 -- Fault Restore ✔": ""
          }
        },
        "308 Event Reporting (p: 101)": {
          "001 -- Miscellaneous Alarm 1": {
            "01 -- Duress Alarm ✔": "",
            "02 -- Opening After Alarm ✔": "",
            "03 -- Recent Closing Alarm ✔": "",
            "04 -- Zone Expander Supervisory Alarm ✔": "",
            "05 -- Zone Expander Supervisory Alarm Restore ✔": "",
            "06 -- Burglary Verified ✔": "",
            "07 -- Burg Not Verified Alarm ✔": "",
            "08 -- Alarm Cancel ✔": ""
          },
          "002 -- Miscellaneous Alarm 2": {
            "01 -- Holdup Verified Alarm ✔": ""
          },
          "011 -- Priority Alarms": {
            "01 -- Keypad Fire Alarm - F Key ✔": "",
            "02 -- Keypad Fire Alarm Restore ✔": "",
            "03 -- Keypad Medical Alarm - M Key ✔": "",
            "04 -- Keypad Medical Alarm Restore ✔": "",
            "05 -- Keypad Panic Alarm (P) ✔": "",
            "06 -- Keypad Panic Alarm Restore ✔": "",
            "07 -- Auxiliary Input Alarm ✔": "",
            "08 -- Aux Input Alarm Restore ✔": ""
          },
          "021 -- Fire Alarms 1": {
            "03 -- PGM 2 2-Wire Alarm ✔": "",
            "04 -- PGM 2 2-Wire Restore ✔": ""
          },
          "101 -- Tamper Events": {
            "03 -- Module Tamper ✔": "",
            "04 -- Module Tamper Restore ✔": "",
            "05 -- Keypad Lockout ✔": "",
            "07 -- Remote Lockout ✔": ""
          },
          "201 -- Open/Close Events 1": {
            "01 -- User Closing ✔": "",
            "02 -- User Opening ✔": "",
            "03 -- Future Use": "",
            "04 -- Future Use": "",
            "05 -- Special Closing ✔": "",
            "06 -- Special Opening ✔": "",
            "07 -- Keyswitch Opening ✔": "",
            "08 -- Keyswitch Closing ✔": ""
          },
          "202 -- Open/Close Events 2": {
            "01 -- Automatic Closing ✔02 -- Automatic Disarm ✔": "",
            "03 -- Auto Arm Cancellation/Postpone ✔": ""
          },
          "211 -- Miscellaneous Open/Close Events": {
            "01 -- Late to Close ✔": "",
            "02 -- Late to Open ✔": "",
            "05 -- Exit Fault ✔": ""
          },
          "221 -- Bypass Events": {
            "01 -- Auto Zone Bypass": "",
            "02 -- Auto Zone Unbypass": "",
            "03 -- Partial Closing ✔": ""
          },
          "301 -- Panel Events 1": {
            "01 -- Panel AC Fail Trouble ✔": "",
            "02 -- Panel AC Fail Restore ✔": "",
            "03 -- Panel Low Battery ✔": "",
            "04 -- Panel Low Battery Restore ✔": "",
            "05 -- Panel Battery Absent ✔": "",
            "06 -- Panel Battery Absent Trouble Restore ✔": ""
          },
          "302 -- Panel Events 2": {
            "01 -- Bell Circuit Trouble ✔": "",
            "02 -- Bell Circuit Restore ✔": "",
            "03 -- Telephone Line Trouble ✔": "",
            "04 -- Telephone Line Trouble Restore ✔": "",
            "05 -- Auxiliary Trouble ✔": "",
            "06 -- Auxiliary Trouble Restore ✔": ""
          },
          "305 -- Panel Events 5": {
            "03 -- PGM 2 2-Wire Trouble ✔": "",
            "04 -- PGM 2 2-Wire Restore ✔": ""
          },
          "311 -- Maintenance Events 1": {
            "01 -- RF Jam Trouble ✔": "",
            "02 -- RF Jam Trouble Restore ✔": "",
            "03 -- Fire Trouble ✔": "",
            "04 -- Fire Trouble Restore ✔": "",
            "05 -- Cold Start ✔": "",
            "06 -- Delinquency ✔": "",
            "07 -- Self Test Trouble ✔": "",
            "08 -- Self Test Trouble Restore ✔": ""
          },
          "312 -- Maintenance Events 2": {
            "01 -- Installer Lead IN ✔": "",
            "02 -- Installer Lead OUT ✔": "",
            "03 -- DLS Lead IN ✔": "",
            "04 -- DLS Lead OUT ✔": "",
            "05 -- SA Lead IN": "",
            "06 -- SA Lead OUT": "",
            "07 -- Event Buffer 75% Full ✔": ""
          },
          "313 -- Maintenance Events 3": {
            "01 -- Firmware Update Begin ✔": "",
            "02 -- Firmware Update Success ✔": "",
            "03 -- Firmware Update Fail ✔": ""
          },
          "314 -- Maintenance Events 4": {
            "01 -- Gas Trouble ✔": "",
            "02 -- Gas Trouble Restore ✔": "",
            "03 -- Heat Trouble ✔": "",
            "04 -- Heat Trouble Restore ✔": "",
            "05 -- Freeze Trouble ✔": "",
            "06 -- Freeze Trouble Restore ✔": "",
            "07 -- Probe Disconnected ✔": "",
            "08 -- Probe Disconnect Restore ✔": ""
          },
          "321 -- Receiver Events": {
            "02 -- Receiver 1 FTC Restore ✔": "",
            "04 -- Receiver 2 FTC Restore ✔": "",
            "06 -- Receiver 3 FTC Restore ✔": "",
            "08 -- Receiver 4 FTC Restore ✔": ""
          },
          "331 -- Module Events 1": {
            "01 -- Module AC Trouble ✔": "",
            "02 -- Module AC Trouble Restore ✔": "",
            "03 -- Module Battery Trouble ✔": "",
            "04 -- Module Battery Trouble Restore ✔": "",
            "05 -- Module Battery Absent ✔": "",
            "06 -- Module Battery Absent Restore ✔": ""
          },
          "332 -- Module Events 2": {
            "01 -- Module Low Voltage ✔": "",
            "02 -- Module Low Voltage Restore ✔": "",
            "03 -- Module Supervisory ✔": "",
            "04 -- Module Supervisory Restore ✔": "",
            "05 -- Module Aux Trouble ✔": "",
            "06 -- Module Aux Trouble Restore ✔": ""
          },
          "335 -- Module Events 5": {
            "01 -- Output 1 Fault ✔": "",
            "02 -- Output 1 Fault Restore ✔": ""
          },
          "351 -- Alternate Communicator 1": {
            "01 -- Alt. Comm. Module Comm Fault ✔": "",
            "02 -- Alt. Comm. Module Comm Fault Restore ✔": "",
            "07 -- Alt. Comm. Radio/SIM Failure ✔": "",
            "08 -- Alt. Comm. Radio/SIM Failure Restore ✔": ""
          },
          "352 -- Alternate Communicator 2": {
            "01 -- Alternate Comm. Network Fault ✔": "",
            "02 -- Alt. Comm. Network Fault Restore ✔": "",
            "05 -- Alt. Comm. Ethernet ✔": "",
            "06 -- Alt. Comm. Ethernet Trouble Restore ✔": ""
          },
          "354 -- Alternate Communicator 4": {
            "01 -- Alt. Comm Receiver 1 ✔": "",
            "02 -- Alt. Comm Receiver 1 Restore ✔": "",
            "03 -- Alt. Comm Receiver 2 ✔": "",
            "04 -- Alt. Comm Receiver 2 Restore ✔": "",
            "05 -- Alt. Comm Receiver 3 ✔": "",
            "06 -- Alt. Comm Receiver 3 Restore ✔": "",
            "07 -- Alt. Comm Receiver 4 ✔": "",
            "08 -- Alt. Comm Receiver 4 Restore ✔": ""
          },
          "355 -- Alternate Communicator 5": {
            "01 -- Alt. Comm Receiver 1 Supervision Failure ✔": "",
            "02 -- Alt. Comm Receiver 1 Supervision Failure Restore ✔": "",
            "03 -- Alt. Comm Receiver 2 Supervision Failure ✔": "",
            "04 -- Alt. Comm Receiver 2 Supervision Failure Restore ✔05 -- Alt. Comm Receiver 3 Supervision Failure ✔": "",
            "06 -- Alt. Comm Receiver 3 Supervision Failure Restore ✔": "",
            "07 -- Alt. Comm Receiver 4 Supervision Failure ✔": "",
            "08 -- Alt. Comm Receiver 4 Supervision Failure Restore ✔": ""
          },
          "361 -- Wireless Device Events": {
            "01 -- Device AC Fail ✔": "",
            "02 -- Device AC Restore ✔": "",
            "03 -- Device Low Battery ✔": "",
            "04 -- Device Low Battery Restore ✔": "",
            "05 -- Device Fault ✔": "",
            "06 -- Device Fault Restore ✔": ""
          },
          "401-- System Test Events": {
            "01 -- Walk Test Start ✔": "",
            "02 -- Walk Test End ✔": "",
            "03 -- Periodic Test Transmission ✔": "",
            "04 -- Periodic Test Transmission with Trouble ✔": "",
            "05 -- System Test ✔": ""
          }
        }
      },
      "[309] -- [385] Communications (p: 106)": {
        "309 System Call Direction (p: 106)": {
          "001-- Maintenance Events/Restores (all troubles except tampers)": {
            "1 -- Receiver 1 ✔": "",
            "2 -- Receiver 2": "",
            "3 -- Receiver 3": "",
            "4 -- Receiver 4": ""
          },
          "002 -- Test Transmission Events": {
            "1 -- Receiver 1 ✔": "",
            "2 -- Receiver 2": "",
            "3 -- Receiver 3": "",
            "4 -- Receiver 4": ""
          }
        },
        "310 Account Codes (p: 107)": {
          "000 -- System Account Code (FFFF)": "",
          "001-008 -- Partition 1-8 Account Code (FFFF)": ""
        },
        "311-318 Partition 1-8 Call Direction (p: 107)": {
          "001 -- Partition Burglary Alarm/Restore Call Direction": {
            "1 -- Receiver 1 ✔": "",
            "2 -- Receiver 2": "",
            "3 -- Receiver 3": "",
            "4 -- Receiver 4": ""
          },
          "002 -- Partition Tamper (Including System Tampers)/Restore Call Direction": {
            "1 -- Receiver 1 ✔": "",
            "2 -- Receiver 2": "",
            "3 -- Receiver 3": "",
            "4 -- Receiver 4": ""
          },
          "003 -- Partition Opening/Closing Call Direction": {
            "1 -- Receiver 1": "",
            "2 -- Receiver 2": "",
            "3 -- Receiver 3": "",
            "4 -- Receiver 4": ""
          }
        },
        "350 Communicator Formats (03 - Contact ID, 04 - SIA) (p: 107)": {
          "001-- Communicator Format - Receiver 1": "",
          "002-- Communicator Format - Receiver 2": "",
          "003-- Communicator Format - Receiver 3": "",
          "004-- Communicator Format - Receiver 4": ""
        },
        "377 Communication Variables (p: 108)": {
          "001 -- Swinger Shutdown Attempts": {
            "-- Alarms and Restore (003) (CP-01 002 sec.)": "",
            "-- Tampers and Restore (003)": "",
            "-- Maintenance and Restore (003)": ""
          },
          "002 -- Communication Delays": {
            "-- Zone Transmission (TX) Delay (000 sec.) (CP-01 030 sec.)": "",
            "-- AC Failure Communication (TX) Delay (030 min./hrs.)": "",
            "-- TLM Trouble Delay (010 sec. x 3)": "",
            "-- WLS Zone Low Battery Transmission Delay (007 days)": "",
            "-- Delinquency Transmission Delay (030 hours/days)": "",
            "-- Communications Cancel Window (000) ((CP-01 005 min.)": ""
          },
          "003 -- Periodic Test Transmission Cycle (030 hrs./days) (timer test 001 for daily)": "",
          "004 -- Periodic Test Transmission Time of Day (9999) (timer test time of the day HH:MM)": "",
          "011 -- Maximum Dialing Attempts (005)": "",
          "012 -- PSTN Delay (003 sec.)": "",
          "013 -- Delay Between Force Attempts (020 sec.)": "",
          "014 -- Post Dial Wait for Handshake (040 sec.)": "",
          "015 -- T-Link Wait for Ack (060 sec.)": "",
          "016 -- IP/Cellular Fault Check Timer (010 )": ""
        },
        "380 Communicator Option 1 (p: 110)": {
          "1 -- Communications Enabled ✔": "",
          "2 -- Restore on Bell Timeout": "",
          "3 -- Pulse Dialing": "",
          "4 -- Pulse Dial After 5th Attempt": "",
          "5 -- Parallel Communications": "",
          "6 -- Alternate Dial ✔": "",
          "7 -- Reduced Dialing Attempts": "",
          "8 -- Activity Delinquency": ""
        },
        "381 Communicator Option 2 (p: 111)": {
          "1 -- Keypad Ringback": "",
          "2 -- Bell Ringback": "",
          "4 -- Closing Confirmation": "",
          "8 -- Communications Priority": ""
        },
        "382 Communicator Option 3 (p: 111)": {
          "1 -- Test Transmission Receiver": "",
          "2 -- Walk Test Communication (UK ✔)": "",
          "4 -- Call Waiting Cancel": "",
          "5 -- Alternate Communicator Enable": "",
          "6 -- AC Failure TX (Communication) Delay in Hours / Minutes": "",
          "8 -- Tamper Limit (UK ✔)": ""
        },
        "383 Communicator Option 4 (p: 112)": {
          "1 -- Phone Number Account Code": "",
          "2 -- 6-Digit Account Code": "",
          "5 -- Communicate FTC (failure to communicate) Events": ""
        },
        "384 Communicator Backup Options (p: 112)": {
          "2 -- Backup Options - Receiver 2 ✔": "",
          "3 -- Backup Options - Receiver 3": "",
          "4 -- Backup Options - Receiver 4": ""
        },
        "385 Audio Module Talk/Listen Mask (p: 112)": {
          "1 -- Talk/Listen on Phone Number 1": "",
          "2 -- Talk/Listen on Phone Number 2": "",
          "3 -- Talk/Listen on Phone Number 3": "",
          "4 -- Talk/Listen on Phone Number 4": ""
        }
      },
      "[401] -- [560] DLS Programming (p: 113)": {
        "401 DLS/SA Options (p: 113)": {
          "1 -- Double Call (C ✔)": "",
          "2 -- User Enables DLS ✔ (C off)": "",
          "3 -- DLS Callback": "",
          "4 -- User Call Up": "",
          "6 -- Panel Call-Up and Baud Rate (300 Baud DLS)": "",
          "7 -- Alt. Comm DLS ✔": ""
        },
        "402 DLS Phone Number Programming (31-digit decimal) (p: 114)": {
          "PSTN = Public switched telephone network": ""
        },
        "403 DLS Access Code (default is based on model) (p: 114)": {
          "HS2128 Models (212800)": "",
          "HS2064 Models (206400)": "",
          "HS2032 Models (203200)": "",
          "HS2016 Models (201600)": ""
        },
        "404 DLS/SA Panel ID (default is based on model) (p: 114)": {
          "HS2128 Models (2128000000)": "",
          "HS2064 Models (2064000000)": "",
          "HS2032 Models (2032000000)": "",
          "HS2016 Models (2016000000)": ""
        },
        "405 PSTN Double Call Timer (060 sec.) (p: 114)": "",
        "406 PSTN Number of Rings to Answer On (000) (TIS 008) (p: 114)": "",
        "407 SA Access Code (FFFFFF)": "",
        "410 Automatic DLS Options (p: 115)": {
          "001 -- Automatic DLS Toggle Options": {
            "1 -- Periodic DLS": "",
            "3 -- DLS on Event Buffer 75% Full": "",
            "8 -- DLS On Programming Change": ""
          },
          "002 -- Periodic DLS Days (000 days)": "",
          "003 -- Periodic DLS Time (0000)": "",
          "007 -- Delay Call Window": {
            "-- Delay Call Window Start (0000)": "",
            "-- Delay Call Window End (0000)": ""
          }
        },
        "560 Virtual Inputs (000) (p: 115)": {
          "001 - 032 -- Virtual Input 1-32": ""
        }
      },
      "[601] -- [714] Schedule Programming (p: 115)": {
        "601-604 Programming Schedule 1-4 (p: 115)": {
          "101 -- Interval 1 Start Time (0000)": "",
          "102 -- Interval 1 End Time (0000)": "",
          "103 -- Interval 1 Days Assignment": {
            "01 -- Sunday": "",
            "02 -- Monday": "",
            "03 -- Tuesday": "",
            "04 -- Wednesday": "",
            "05 -- Thursday": "",
            "06 -- Friday": "",
            "07 -- Saturday": ""
          },
          "104 -- Interval 1 Holiday Assignment": {
            "01 -- Holiday 1": "",
            "02 -- Holiday 2": "",
            "03 -- Holiday 3": "",
            "04 -- Holiday 4": ""
          },
          "201 -- Interval 2 Start Time (0000)": "",
          "202 -- Interval 2 End Time (0000)": "",
          "203 -- Interval 2 Days Assignment": {
            "01 -- Sunday": "",
            "02 -- Monday": "",
            "03 -- Tuesday": "",
            "04 -- Wednesday": "",
            "05 -- Thursday": "",
            "06 -- Friday": "",
            "07 -- Saturday": ""
          },
          "204 -- Interval 2 Holiday Assignment": {
            "01 -- Holiday 1": "",
            "02 -- Holiday 2": "",
            "03 -- Holiday 3": "",
            "04 -- Holiday 4": ""
          },
          "301 -- Interval 3 Start Time (0000)": "",
          "302 -- Interval 3 End Time (0000)": "",
          "303 -- Interval 3 Days Assignment": {
            "01 -- Sunday": "",
            "02 -- Monday": "",
            "03 -- Tuesday": "",
            "04 -- Wednesday": "",
            "05 -- Thursday": "",
            "06 -- Friday": "",
            "07 -- Saturday": ""
          },
          "304 -- Interval 3 Holiday Assignment": {
            "01 -- Holiday 1": "",
            "02 -- Holiday 2": "",
            "03 -- Holiday 3": "",
            "04 -- Holiday 4": ""
          },
          "401 -- Interval 4 Start Time (0000)": "",
          "402 -- Interval 4 End Time (0000)": "",
          "403 -- Interval 4 Days Assignment": {
            "01 -- Sunday": "",
            "02 -- Monday": "",
            "03 -- Tuesday": "",
            "04 -- Wednesday": "",
            "05 -- Thursday": "",
            "06 -- Friday": "",
            "07 -- Saturday": ""
          },
          "404 -- Interval 4 Holiday Assignment": {
            "01 -- Holiday 1": "",
            "02 -- Holiday 2": "",
            "03 -- Holiday 3": "",
            "04 -- Holiday 4": ""
          }
        },
        "711-714 Holiday Group 1-4 (p: 116)": {
          "001 -- 099 Holiday Group 1-4 Date 1-99 (000000, MMDDYY)": ""
        }
      },
      "[802] Audio Station Programming (p: 116)": {
        "802 Audio Station Assignment (p: 116)": {
          "001 - 128 -- Zone Audio Station Assignment 1 - 128 (00)": "",
          "600 -- 2-Way Audio Trigger Option 1": {
            "01 -- Tampers": "",
            "03 -- [A] (M) Key Alarm ✔": "",
            "04 -- [P] Key Alarm ✔": "",
            "05 -- Duress Alarm ✔": "",
            "06 -- Opening After Alarm ✔": "",
            "07 -- Future Use": "",
            "08 -- Zone Supervision Alarm": ""
          },
          "603 -- 2-Way Audio Control Option 1": {
            "01 -- Future Use": "",
            "02 -- Listen to all zones / Listen to zones in alarm ✔": "",
            "03 -- Future Use": "",
            "04 -- Siren Active During 2-Way Audio": "",
            "05 -- Hang-Up Auto Detection": "",
            "06 -- User Call-In": "",
            "07 -- Future Use": "",
            "08 -- 2-Way Audio Initiated by CS ✔": ""
          },
          "605 -- Record Options": {
            "01 -- Audio Capture Enable ✔": "",
            "02 -- Erase on FTC (Fail to Communicate)": ""
          },
          "606 -- Audio Station Record Control Option 1": {
            "01 -- Audio Station 1 Record ✔": "",
            "02 -- Audio Station 2 Record ✔": "",
            "03 -- Audio Station 3 Record ✔": "",
            "04 -- Audio Station 4 Record ✔": ""
          },
          "610 -- Call Back / Recovery Window Duration (05)": "",
          "611 -- Call Back Acknowledge code (999999)": "",
          "612 -- Answering Machine Bypass (00)": "",
          "613 -- Double Call Timer (030)": "",
          "614 -- Number of Rings to Answer (00)": "",
          "615 -- Audio Duration (90 sec.)": "",
          "616 -- Record Time (105 sec.)": "",
          "617 -- Erase Timer (15 min.)": "",
          "620 -- Audio Station Tamper Option 1": {
            "01 -- Audio Station 1 Tamper": "",
            "02 -- Audio Station 2 Tamper": "",
            "03 -- Audio Station 3 Tamper": "",
            "04 -- Audio Station 4 Tamper": ""
          },
          "999 -- Reset Module Programming to Factory Defaults": {
            "[Installer code] > 999 or [*]": ""
          }
        }
      },
      "[804] -- [851] Wireless Programming (p: 116)": {
        "804 Wireless Programming (p: 116)": {
          "000 -- WLS Device Enrollment": {
            "Zones:": {
              "Zone # (3-digit decimal)": "",
              "Zone Type / Definition (2-digit decimal)": "",
              "Partition Assignment": "",
              "Zone Label (LCD only)": ""
            },
            "WLS Keys:": {
              "WLS Key #": "",
              "Partition Assignment": "",
              "User Assignment": "",
              "WLS Key Label": ""
            },
            "Sirens:": {
              "Siren #": "",
              "Partition Assignment": "",
              "Siren Label (LCD only)": ""
            },
            "Keypads": {
              "Keypad #": "",
              "Partition Assignment": "",
              "Keypad Label (LCD only)": ""
            },
            "Repeaters:": {
              "Repeater #": "",
              "Repeater Label (LCD only)": ""
            }
          },
          "001 -- 128 Configure Wireless Zones 1-128": {
            "001 Device toggles": "",
            "002 Zone EOL": ""
          },
          "551 -- 566 Configure Wireless Sirens 1-16": "",
          "601 -- 632 Configure Wireless Keys 1-32": "",
          "701 -- 716 Configure Wireless Keypads 1-16": "",
          "801 Jam Detect": "",
          "802 Supervisory Window": "",
          "810 Wireless Options (Only Available if RF Keypad or HOST enrolled)": {
            "1 - RF Delinquency": "",
            "2 - Wireless Supervisory/ RF Jam Alarm": "",
            "3 - Wireless Tamper": "",
            "4 - Fire Supervision": "",
            "5 - Smart Temperature Reporting": ""
          },
          "841 Visual Verification Programming (Motion Cameras)": "",
          "901 -- 905 Delete Wireless Devices:": {
            "901 Delete Zones": {
              "Select Zone > [*] to confirm": ""
            },
            "902 Delete WLS Keys": "",
            "903 Delete Sirens": "",
            "904 Delete Repeaters": "",
            "905 Delete Keypads": ""
          },
          "921 -- 925 Replace Wireless Devices:": {
            "921 Replace Device (Zones)": {
              "Select Zone > [*] to auto enroll or enter ID": ""
            },
            "922 Replace WLS Keys": "",
            "923 Replace Sirens": "",
            "924 Replace Repeaters": "",
            "925 Replace Keypads": ""
          },
          "990 Show All Devices (Shows Devices ID)": {
            "001 Zones": "",
            "002 Repeaters": "",
            "003 Sirens": "",
            "004 WLS Keys": "",
            "005 Keypads": ""
          },
          "999 Reset Devices to Factory Default": "",
          "Refer to the installation instructions provided with the HSM2Host for more wireless programming options.": ""
        },
        "850 Cellular Signal Strength": "",
        "851 Alternate Communicator Programming": {
          "Refer to the installation instructions provided with the alternate communicator for details.": ""
        }
      },
      "[860] -- [899] Keypad Programming (p: 117)": {
        "860 Display Keypad Slot Number (p: 117)": {
          "Shows version and slot number of current keypad": ""
        },
        "861-876 Keypad (1 to 16) Programming": {
          "000 -- Keypad Partition Mask": {
            "00 -- Global Keypad": "",
            "01 -- Partition 1 ✔": "",
            "02 -- Partition 2": "",
            "03 -- Partition 3": "",
            "04 -- Partition 4": "",
            "05 -- Partition 5": "",
            "06 -- Partition 6": "",
            "07 -- Partition 7": "",
            "08 -- Partition 8": ""
          },
          "001 -- Function Key 1 (03)": "",
          "002 -- Function Key 2 (04)": "",
          "003 -- Function Key 3 (06)": "",
          "004 -- Function Key 4 (22)": "",
          "005 -- Function Key 5 (16)": {
            "00 -- Null Key": "",
            "02 -- Instant Stay Arm": "",
            "03 -- Stay Arm": "",
            "04 -- Away Arm": "",
            "05 -- No Entry Arm": "",
            "06 -- Chime On/Off": "",
            "07 -- System Test": "",
            "09 -- Night Arm": "",
            "12 -- Global Stay Arm": "",
            "13 -- Global Away Arm": "",
            "14 -- Global Disarming": "",
            "16 -- Quick Exit": "",
            "17 -- Arm Interior": "",
            "21-24 -- Command Output 1-4": "",
            "29 -- Bypass Group Recall": "",
            "31 -- Local PGM Activate": "",
            "32 -- Bypass Mode": "",
            "33 -- Bypass recall": "",
            "34 -- User Programming": "",
            "35 -- User Functions": "",
            "37 -- Time/Date Programming": "",
            "39 -- Trouble Display": "",
            "40 -- Alarm Memory": "",
            "61-68 -- Partition Select 1-8": ""
          },
          "011 -- Keypad I/O (Zone) (000)": "",
          "012 -- Local PGM Output Timer": {
            "Pulse Time (00 minutes)": "",
            "Pulse Time (05 sec.)": ""
          },
          "021 -- Keypad Option 1": {
            "1 -- [F] Key Enabled ✔": "",
            "2 -- [M] Key Enabled ✔": "",
            "3 -- [P] Key Enabled ✔": "",
            "4 -- Display Code or X's ✔": ""
          },
          "022 -- Keypad Option 2": {
            "1 -- Local Clock Display ✔": "",
            "2 -- Local Clock Display 24 Hour": "",
            "3 -- Auto Alarm Scroll ✔": "",
            "5 -- Power LED Option ✔": "",
            "6 -- Power LED AC Present ✔": "",
            "7 -- Alarms Displayed if Armed ✔": "",
            "8 -- Auto Scroll Open Zones ✔": ""
          },
          "023 -- Keypad Option 3": {
            "1 -- Armed LED Power Save*": "",
            "2 -- Keypad Show Arm Mode ✔*": "",
            "3 -- 5th Terminal is PGM Output/Zone": "",
            "4 -- Prox Tag Arm/Disarm": "",
            "7 -- Local Display of Temp.": "",
            "8 -- Low Temperature Warning": ""
          },
          "030 -- LCD Message (16 x 2 hex )": "",
          "031 -- Download LCD Message Duration (000)": "",
          "041 -- Indoor Temperature Zone Entry (000)": "",
          "042 -- Outdoor Temperature Zone Entry (000)": "",
          "101-228 -- Door Chime Sound-Zone 1- 128": {
            "00 -- Disabled": "",
            "01 -- 6 beeps ✔": "",
            "02 -- \"Bing-Bong\" Sound": "",
            "03 -- \"Ding-Dong\" Sound": "",
            "04 -- Alarm Tone": "",
            "05 -- Zone Name": ""
          }
        },
        "899 Template Programming": {
          "-- 5-Digit Template Code (5-digit decimal)": "",
          "-- Central Station Telephone Number (32-digit decimal)": "",
          "-- Central Station Account Code (4/6-digit decimal)": "",
          "-- Partition Account Code (4-digit decimal)": "",
          "-- DLS Access Code (6-digit decimal)": "",
          "-- Partition Entry Delay (000-255 sec.)": "",
          "-- Partition Exit Delay (000-255 sec.)": "",
          "-- Installer Code": ""
        }
      },
      "[900] -- [901] System Information and Testing (p: 117)": {
        "900 System Information (p: 117)": {
          "000 -- Control Panel Version": "",
          "001-016 -- Keypad 1-16 Version Info": "",
          "101-116 -- 8 Zone expander Module - HSM2108 1-16 Version Info": "",
          "201-216 -- 8 Low Current Output Module - HSM2208 1-16 Version Information": "",
          "460 -- Alternate Communicator Info": "",
          "461 -- HSM2HOST Module Version Info": "",
          "481 -- HSM2955 Two-Way Audio Module Version Info": "",
          "501 -- 504 HSM2300 Power Supply Module 1-4 Version Info": "",
          "521 -- 524 HSM2204 High Current Output Module 1-4 Version Info": ""
        },
        "901 Installer Walk Test Mode Enable/Disable (p: 118)": ""
      },
      "[902] -- [912] Module Programming (p: 118)": {
        "902 Add/Remove Modules (p: 118)": {
          "000 -- Auto-Enroll All Modules": {
            "KP: ## IO: ## M:## (Auto enroll modules and shows # of keypads, # input/output modules and # other modules)": ""
          },
          "001 -- Enroll Modules": {
            "Enter serial number to enroll (8-digits)": ""
          },
          "002 -- Slot Assignment": {
            "Enter module serial number (8-digits) then enter slot number (2-digits)": ""
          },
          "003 -- Edit Module Slot Assignment": {
            "Select module and enter slot number (2-digits)": ""
          },
          "101 -- Delete Keypads": {
            "Select keypad then [*] to delete": ""
          },
          "102 -- Delete HSM2108": {
            "Select Zone expander then [*] to delete": ""
          },
          "103 -- Delete HSM2208": "",
          "106 -- Delete HSM2HOST": "",
          "108 -- Delete HSM2955": "",
          "109 -- Delete HSM2300": "",
          "110 -- Delete HSM2204": ""
        },
        "903 Confirm Modules (p: 119)": {
          "000 -- View All Modules": {
            "Shows each module enrolled with SN serial number and Slot number": ""
          },
          "101 -- Confirm Keypads": {
            "Select keypad and turns on all LEDs on keypad": ""
          },
          "102 -- Confirm HSM2108 Zone Expander": {
            "Select zone expander y makes LED flash on the expander module": ""
          },
          "103 -- Confirm HSM2208": "",
          "106 -- Confirm HSM2HOST": "",
          "108 -- Confirm HSM2955": "",
          "109 -- Confirm HSM2300": "",
          "110 -- Confirm HSM2204": ""
        },
        "904 Wireless Placement Test (p: 120)": {
          "001-128 -- Placement Test Zones 1-128": {
            "Select zone to perform test, goes testing zone and shows signal strength": ""
          },
          "521-528 -- Placement Test Repeaters 1-28": "",
          "551-566 -- Placement Test Sirens 1-16": "",
          "601-632 -- Placement Test Wireless Keys 1-32": {
            "Select wireless key then shows Activate Device, press and hold any key to perform test and show results": ""
          },
          "701-716 -- Placement Test Wireless Keypads 1-16": ""
        },
        "912 Soak Test (p: 121)": {
          "000 -- Zone Soak Test Duration Default: 014": "",
          "001-128 -- Zone Soak Test -- Zones 1-128": ""
        }
      },
      "[982] Battery Settings (p: 121)": {
        "982 Battery Settings (p: 121)": {
          "000-- Panel Battery Settings": {
            "01-- Panel High Charge Current (SA ✔)(FRA ✔)(UK ✔)": ""
          },
          "010 -- HSM2204 Battery Settings": {
            "01 -- HSM2204 1 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": "",
            "02 -- HSM2204 2 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": "",
            "03 -- HSM2204 3 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": "",
            "04 -- HSM2204 4 High Charge Current (SA ✔)(FRA ✔)(UK ✔)": ""
          },
          "020 -- HSM2300 Battery Settings": {
            "01 -- HSM2300 1 Charge": "",
            "02 -- HSM2300 2 Charge": "",
            "03 -- HSM2300 3 Charge": "",
            "04 -- HSM2300 4 Charge": ""
          }
        }
      },
      "[989] Defaults (p: 121)": {
        "989 Default Master Code (p: 121)": "",
        "990 Installer Lockout Enable/Disable (p: 121)": "",
        "991 Default Keypads (p: 121)": {
          "901-916 -- Default Keypad 1-16": "",
          "999 -- Default all Keypads": ""
        },
        "993 Default Alt Comm (p: 121)": "",
        "996 Default HSM2HOST (p: 122)": "",
        "998 Default HSM2955 (p: 122)": "",
        "999 Default System (p: 122)": ""
      }
    }
  };
