# frozen_string_literal: true
class BidirectionalLinksGenerator < Jekyll::Generator
  def generate(site)
    graph_nodes = []
    graph_edges = []

    all_notes = site.collections['notes'].docs
      
    all_articles = site.collections['articles'].docs
      
    all_daily = site.collections['daily'].docs
      
    all_journal = site.collections['journal'].docs
            
    all_content = all_journal + all_daily + all_articles + all_notes

    all_pages = site.pages

    all_docs = all_content + all_pages
    

    link_extension = !!site.config["use_html_extension"] ? '.html' : ''


    # Identify note backlinks and add them to each note
    all_content.each do |current_note|
      # Nodes: Jekyll
      notes_linking_to_current_note = all_content.filter do |e|
        e.content.include?(current_note.url)
      end

      # Nodes: Graph
      graph_nodes << {
        id: note_id_from_note(current_note),
        path: "#{site.baseurl}#{current_note.url}#{link_extension}",
        label: current_note.data['title'],
      } unless current_note.path.include?('_notes/index.html')

      # Edges: Jekyll
      current_note.data['backlinks'] = notes_linking_to_current_note

      # Edges: Graph
      notes_linking_to_current_note.each do |n|
        graph_edges << {
          source: note_id_from_note(n),
          target: note_id_from_note(current_note),
        }
      end
    end

    File.write('other/_includes/notes_graph.json', JSON.dump({
      edges: graph_edges,
      nodes: graph_nodes,
    }))
  end

  def note_id_from_note(note)
    note.data['title'].bytes.join
  end
end