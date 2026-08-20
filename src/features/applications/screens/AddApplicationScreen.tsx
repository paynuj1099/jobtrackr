import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DatePickerModal } from "../components/DatePickerModal";
import { SelectModal } from "../components/SelectModal";
import { styles } from "./AddApplicationScreen.styles";

type WorkSetup = "Remote" | "Hybrid" | "Onsite";

const STATUS_OPTIONS = [
  "Applied",
  "Screening",
  "Interview",
  "Shortlisted",
  "Technical Interview",
  "Final Interview",
  "Offer",
  "Hired",
  "Rejected",
  "Withdrawn",
] as const;

const SOURCE_OPTIONS = [
  "LinkedIn",
  "Indeed",
  "JobStreet",
  "Company Website",
  "Referral",
  "Other",
] as const;

export function AddApplicationScreen() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const [status, setStatus] = useState("Applied");
  const [dateApplied, setDateApplied] = useState(new Date());

  const [workSetup, setWorkSetup] = useState<WorkSetup>("Hybrid");

  const [location, setLocation] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [source, setSource] = useState("LinkedIn");

  const [statusOpen, setStatusOpen] = useState(false);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  const formattedDate = dateApplied.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleSave = () => {
    console.log({
      company,
      position,
      status,
      dateApplied,
      workSetup,
      location,
      salaryMin,
      salaryMax,
      jobUrl,
      source,
    });

    router.back();
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <LinearGradient
        colors={["#1769F5", "#8B5CF6"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.headerGradient}
      >
        <SafeAreaView edges={["top"]} style={styles.headerSafeArea}>
          <View style={styles.header}>
            <Pressable
              onPress={() => router.back()}
              hitSlop={12}
              style={styles.headerSide}
            >
              <Text style={styles.backIcon}>‹</Text>
            </Pressable>

            <Text style={styles.headerTitle}>Add Application</Text>

            <Pressable
              onPress={handleSave}
              hitSlop={12}
              style={[styles.headerSide, styles.saveContainer]}
            >
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </LinearGradient>

      {/* Form */}
      <View style={styles.formCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Company */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>
              Company <Text style={styles.required}>*</Text>
            </Text>

            <TextInput
              value={company}
              onChangeText={setCompany}
              placeholder="Company name"
              placeholderTextColor="#A7AEC3"
              style={styles.input}
            />
          </View>

          {/* Position */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>
              Position <Text style={styles.required}>*</Text>
            </Text>

            <TextInput
              value={position}
              onChangeText={setPosition}
              placeholder="Job position"
              placeholderTextColor="#A7AEC3"
              style={styles.input}
            />
          </View>

          {/* Status */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Status</Text>

            <Pressable
              style={styles.selectField}
              onPress={() => setStatusOpen(true)}
            >
              <Text style={styles.selectValue}>{status}</Text>

              <Text style={styles.chevron}>⌄</Text>
            </Pressable>
          </View>

          {/* Date Applied */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Date Applied</Text>

            <Pressable
              style={styles.selectField}
              onPress={() => setDateOpen(true)}
            >
              <Text style={styles.selectValue}>{formattedDate}</Text>

              <Text style={styles.calendarIcon}>▣</Text>
            </Pressable>
          </View>

          {/* Work Setup */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Work Setup</Text>

            <View style={styles.workSetupRow}>
              {(["Remote", "Hybrid", "Onsite"] as WorkSetup[]).map((item) => {
                const selected = workSetup === item;

                return (
                  <Pressable
                    key={item}
                    onPress={() => setWorkSetup(item)}
                    style={[
                      styles.workSetupButton,
                      selected && styles.workSetupButtonSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.workSetupText,
                        selected && styles.workSetupTextSelected,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Location */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Location</Text>

            <TextInput
              value={location}
              onChangeText={setLocation}
              placeholder="City, Province"
              placeholderTextColor="#A7AEC3"
              style={styles.input}
            />
          </View>

          {/* Salary */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Salary (PHP)</Text>

            <View style={styles.salaryRow}>
              <TextInput
                value={salaryMin}
                onChangeText={setSalaryMin}
                placeholder="Minimum"
                placeholderTextColor="#A7AEC3"
                keyboardType="numeric"
                style={[styles.input, styles.salaryInput]}
              />

              <Text style={styles.salarySeparator}>-</Text>

              <TextInput
                value={salaryMax}
                onChangeText={setSalaryMax}
                placeholder="Maximum"
                placeholderTextColor="#A7AEC3"
                keyboardType="numeric"
                style={[styles.input, styles.salaryInput]}
              />
            </View>
          </View>

          {/* Job URL */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Job URL</Text>

            <TextInput
              value={jobUrl}
              onChangeText={setJobUrl}
              placeholder="https://..."
              placeholderTextColor="#A7AEC3"
              keyboardType="url"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          {/* Source */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Source</Text>

            <Pressable
              style={styles.selectField}
              onPress={() => setSourceOpen(true)}
            >
              <Text style={styles.selectValue}>{source}</Text>

              <Text style={styles.chevron}>⌄</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      {/* Status Modal */}
      <SelectModal
        visible={statusOpen}
        title="Select Status"
        value={status}
        options={STATUS_OPTIONS}
        onSelect={setStatus}
        onClose={() => setStatusOpen(false)}
      />

      {/* Source Modal */}
      <SelectModal
        visible={sourceOpen}
        title="Select Source"
        value={source}
        options={SOURCE_OPTIONS}
        onSelect={setSource}
        onClose={() => setSourceOpen(false)}
      />

      {/* Date Picker Modal */}
      <DatePickerModal
        visible={dateOpen}
        value={dateApplied}
        onChange={setDateApplied}
        onClose={() => setDateOpen(false)}
      />
    </View>
  );
}
