// Simulação de backend para demonstração
// Para produção, configure as credenciais do Supabase

export type ContactForm = {
  id?: string
  nome: string
  email: string
  telefone: string
  empresa?: string
  objetivos?: string[]
  orcamento?: string
  mensagem: string
  created_at?: string
}

export const submitContactForm = async (formData: Omit<ContactForm, 'id' | 'created_at'>) => {
  try {
    // Simulação de envio - em produção, use Supabase configurado
    const contactData = {
      ...formData,
      id: Date.now().toString(),
      created_at: new Date().toISOString()
    }
    
    // Salva localmente para demonstração
    const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]')
    existingContacts.push(contactData)
    localStorage.setItem('contacts', JSON.stringify(existingContacts))
    
    // Simula delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Contato recebido:', contactData)
    
    return { success: true, data: contactData }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    return { success: false, error }
  }
}