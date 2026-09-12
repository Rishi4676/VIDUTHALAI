/**
 * VoiceKnowledge.js - Mirror Class for AIKnowledgeService
 * Ensures complete compatibility across all script loaders and pages.
 */
class VoiceKnowledge extends window.AIKnowledgeService {
  constructor() {
    super();
  }
}

window.VoiceKnowledge = VoiceKnowledge;
