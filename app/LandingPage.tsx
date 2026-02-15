
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const LandingPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Non-sticky Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>StudyStreak</Text>
      </View>

      {/* 1. Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.headline}>Stop Cramming. Start Streaking.</Text>
        <Text style={styles.subheading}>
          The gamified study app that makes learning addictive. Track progress, crush exams, and learn languages—all in one place.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Download for Free</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x600.png?text=App+Dashboard' }}
          style={styles.phoneMockup}
        />
      </View>

      {/* 2. Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionHeadline}>Everything You Need to Succeed</Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <Text style={styles.cardIcon}>📚</Text>
            <Text style={styles.cardHeadline}>Subject Tracking</Text>
            <Text style={styles.cardText}>Effortlessly monitor your study progress.</Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={styles.cardIcon}>🧠</Text>
            <Text style={styles.cardHeadline}>Flashcards & Quizzes</Text>
            <Text style={styles.cardText}>Ace every test with smart practice tools.</Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={styles.cardIcon}>⏳</Text>
            <Text style={styles.cardHeadline}>Exam Countdowns</Text>
            <Text style={styles.cardText}>Never miss a deadline again.</Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={styles.cardIcon}>🌍</Text>
            <Text style={styles.cardHeadline}>Language Lessons</Text>
            <Text style={styles.cardText}>Learn a new language on your break.</Text>
          </View>
        </View>
      </View>

      {/* 3. How It Works Section */}
      <View style={styles.howItWorksSection}>
        <Text style={styles.sectionHeadline}>Get Started in Seconds</Text>
        <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <Text style={styles.stepIcon}>🎯</Text>
            <Text style={styles.stepTitle}>Set Your Goals</Text>
            <Text style={styles.stepDescription}>Choose your subjects or languages and set your study schedule.</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepIcon}>🎮</Text>
            <Text style={styles.stepTitle}>Study & Play</Text>
            <Text style={styles.stepDescription}>Complete lessons and quizzes to earn XP and build your daily streak.</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepIcon}>🏆</Text>
            <Text style={styles.stepTitle}>Achieve Mastery</Text>
            <Text style={styles.stepDescription}>Unlock achievements and watch your knowledge grow.</Text>
          </View>
        </View>
      </View>

      {/* 4. Gamification Section */}
      <View style={styles.gamificationSection}>
        <Text style={[styles.sectionHeadline, { color: '#fff' }]}>Unlock Your Potential. <Text style={{color: '#8E2DE2'}}>One Streak at a Time.</Text></Text>
        <View style={styles.gamificationContent}>
            <View style={styles.streakDisplay}>
                <Text style={styles.streakFlame}>🔥</Text>
                <Text style={styles.streakNumber}>72</Text>
                <Text style={styles.streakText}>Day Streak</Text>
            </View>
            <View style={styles.xpDisplay}>
                <Text style={styles.xpText}>Level 12</Text>
                <View style={styles.xpBarContainer}><View style={styles.xpBar} /></View>
                <Text style={styles.xpText}>1,250 / 2,000 XP</Text>
            </View>
        </View>
        <Text style={styles.gamificationSubtext}>Our dopamine-driven design keeps you motivated. The longer your streak, the more you learn and the more you achieve.</Text>
      </View>

      {/* 5. Screenshots Section */}
      <View style={styles.screenshotsSection}>
        <Text style={styles.sectionHeadline}>A Glimpse Inside StudyStreak</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.screenshotsContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/300x600.png?text=Language+Interface' }} style={styles.screenshotMockup} />
          <Image source={{ uri: 'https://via.placeholder.com/300x600.png?text=Flashcard+Creation' }} style={styles.screenshotMockup} />
          <Image source={{ uri: 'https://via.placeholder.com/300x600.png?text=Statistics+Page' }} style={styles.screenshotMockup} />
        </ScrollView>
      </View>

      {/* 6. Social Proof Section */}
      <View style={styles.socialProofSection}>
        <Text style={styles.sectionHeadline}>Loved by Students Everywhere</Text>
        <View style={styles.testimonialsContainer}>
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialStars}>★★★★★</Text>
            <Text style={styles.testimonialQuote}>"StudyStreak changed the way I prepare for exams. I'm more organized and motivated than ever."</Text>
            <Text style={styles.testimonialAuthor}>— Sarah J., University Student</Text>
          </View>
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialStars}>★★★★★</Text>
            <Text style={styles.testimonialQuote}>"Finally, a study app that's actually fun to use! The gamification makes a huge difference."</Text>
            <Text style={styles.testimonialAuthor}>— David L., High School Student</Text>
          </View>
        </View>
      </View>

      {/* 7. Final CTA Section */}
      <View style={styles.finalCtaSection}>
        <Text style={styles.headline}>Ready to Start Your Streak?</Text>
        <Text style={styles.subheading}>Join thousands of students who are already learning smarter. Free to download.</Text>
        <View style={styles.downloadButtonsContainer}>
            <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}> App Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>► Google Play</Text>
            </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', fontFamily: 'Poppins-Regular' },
  header: {
    backgroundColor: 'orange',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40 // For status bar
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  // Hero
  heroSection: { alignItems: 'center', justifyContent: 'center', padding: 20, background: 'linear-gradient(to bottom, #4A00E0, #8E2DE2)' },
  headline: { fontSize: 48, fontFamily: 'Poppins-Bold', color: '#fff', textAlign: 'center', marginBottom: 10 },
  subheading: { fontSize: 18, color: '#EAEAEA', textAlign: 'center', marginBottom: 30, fontFamily: 'Poppins-Regular' },
  ctaButton: { backgroundColor: '#00FF00', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, marginBottom: 30 },
  ctaButtonText: { color: '#000', fontSize: 18, fontFamily: 'Poppins-Bold' },
  phoneMockup: { width: 300, height: 600, resizeMode: 'contain' },
  
  sectionHeadline: { fontSize: 36, fontFamily: 'Poppins-Bold', textAlign: 'center', marginBottom: 40 },
  
  // Features
  featuresSection: { padding: 40, backgroundColor: '#F7F9FC' },
  featuresGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  featureCard: { backgroundColor: '#fff', borderRadius: 10, padding: 20, margin: 10, alignItems: 'center', width: '40%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5 },
  cardIcon: { fontSize: 40, marginBottom: 15 },
  cardHeadline: { fontSize: 18, fontFamily: 'Poppins-Bold', marginBottom: 5, textAlign: 'center' },
  cardText: { fontSize: 14, color: '#666', textAlign: 'center', fontFamily: 'Poppins-Regular' },
  
  // How It Works
  howItWorksSection: { padding: 40, backgroundColor: '#fff' },
  stepsContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  step: { alignItems: 'center', maxWidth: '30%' },
  stepIcon: { fontSize: 50, marginBottom: 15 },
  stepTitle: { fontSize: 20, fontFamily: 'Poppins-Bold', marginBottom: 10 },
  stepDescription: { fontSize: 16, color: '#666', textAlign: 'center', fontFamily: 'Poppins-Regular' },

  // Gamification
  gamificationSection: { padding: 40, backgroundColor: '#1A1A1A', alignItems: 'center' },
  gamificationContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: 30, width: '100%' },
  streakDisplay: { alignItems: 'center' },
  streakFlame: { fontSize: 60 },
  streakNumber: { fontSize: 72, fontFamily: 'Poppins-Bold', color: '#fff' },
  streakText: { fontSize: 18, color: '#BDBDBD', fontFamily: 'Poppins-Regular' },
  xpDisplay: { alignItems: 'center' },
  xpText: { fontSize: 18, color: '#BDBDBD', marginBottom: 10, fontFamily: 'Poppins-Regular' },
  xpBarContainer: { height: 20, width: 250, backgroundColor: '#333', borderRadius: 10, marginBottom: 10 },
  xpBar: { height: '100%', width: '62.5%', backgroundColor: '#00FF00', borderRadius: 10 },
  gamificationSubtext: { fontSize: 16, color: '#BDBDBD', textAlign: 'center', maxWidth: 600, marginTop: 20, fontFamily: 'Poppins-Regular' },

  // Screenshots
  screenshotsSection: { paddingVertical: 40, backgroundColor: '#fff' },
  screenshotsContainer: { paddingHorizontal: 20, alignItems: 'center' },
  screenshotMockup: { width: 250, height: 500, resizeMode: 'contain', marginHorizontal: 15, transform: 'rotate(-5deg)' },
  
  // Social Proof
  socialProofSection: { padding: 40, backgroundColor: '#F7F9FC' },
  testimonialsContainer: { flexDirection: 'row', justifyContent: 'center' },
  testimonialCard: { backgroundColor: '#fff', borderRadius: 10, padding: 20, margin: 10, maxWidth: '40%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5 },
  testimonialStars: { fontSize: 24, color: '#FFD700', marginBottom: 10 },
  testimonialQuote: { fontSize: 16, fontStyle: 'italic', color: '#555', marginBottom: 15, fontFamily: 'Poppins-Regular' },
  testimonialAuthor: { fontSize: 14, fontFamily: 'Poppins-Bold', textAlign: 'right' },

  // Final CTA
  finalCtaSection: { padding: 60, alignItems: 'center', background: 'linear-gradient(to top, #4A00E0, #8E2DE2)' },
  downloadButtonsContainer: { flexDirection: 'row', marginTop: 20 },
  downloadButton: { backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10, marginHorizontal: 10 },
  downloadButtonText: { color: '#000', fontSize: 18, fontFamily: 'Poppins-Bold' },
});

export default LandingPage;
