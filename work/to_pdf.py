import comtypes.client


def convert_word_to_pdf(inputFile,outputFile):
    word = comtypes.client.CreateObject('Word.Application')
    doc = word.Documents.Open(inputFile)
    doc.SaveAs(outputFile, FileFormat = 17)
    doc.close()
    word.Quit()
    return outputFile



